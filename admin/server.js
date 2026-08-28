import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import doctorContent from './doctor-content.json' with { type: 'json' };

const root = path.dirname(fileURLToPath(import.meta.url));
const uploadDirectory = path.resolve(root, '../web/public/uploads');
fs.mkdirSync(uploadDirectory, { recursive: true });
const uploadStorage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (_, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    callback(null, `${Date.now()}-${Math.random().toString(36).slice(2, 10)}${extension}`);
  },
});
const upload = multer({
  storage: uploadStorage,
  limits: { fileSize: 100 * 1024 * 1024 },
  fileFilter: (_, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const allowedExtension = /\.(jpg|jpeg|png|webp|gif|avif|mp4|webm|mov)$/i.test(extension);
    callback(null, (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) && allowedExtension);
  },
});
const db = new DatabaseSync(path.join(root, 'shengya.sqlite'));
db.exec('PRAGMA journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS contact_submissions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone TEXT NOT NULL, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'unread', created_at TEXT NOT NULL DEFAULT (datetime('now','localtime'))); CREATE TABLE IF NOT EXISTS site_content (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT NOT NULL DEFAULT (datetime('now','localtime'))); CREATE TABLE IF NOT EXISTS doctors (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, title TEXT NOT NULL, focus TEXT NOT NULL, image TEXT NOT NULL, enabled INTEGER NOT NULL DEFAULT 1, sort_order INTEGER NOT NULL DEFAULT 0)`);
const doctorColumns = new Set(db.prepare('PRAGMA table_info(doctors)').all().map((column) => column.name));
for (const column of ['name_en', 'title_en', 'focus_en', 'bio', 'credentials', 'specialties', 'philosophy']) {
  if (!doctorColumns.has(column)) db.exec(`ALTER TABLE doctors ADD COLUMN ${column} TEXT NOT NULL DEFAULT ''`);
}
const defaults = { siteName: '圣娅', siteNameEn: 'Saintia', tagline: '专业与温度相遇于圣娅', taglineEn: 'Where expertise meets compassionate care', phone: '15821127772', email: '5621995988@qq.com', address: '上海市青浦区蟠中路373号', addressEn: '373 Panzhong Road, Qingpu District, Shanghai', hours: '周一至周日 09:00—22:00', hoursEn: 'Monday–Sunday, 09:00–22:00', heroImage: '/ribenpeizhen/1715069992418710.jpg', heroVideo: '/圣娅医院素材/视频/Weixin Videos2026-08-21_095537_672.mp4' };
const insertContent = db.prepare('INSERT OR IGNORE INTO site_content (key,value) VALUES (?,?)'); Object.entries(defaults).forEach(([key, value]) => insertContent.run(key, value));
const doctorContentVersion = '2026-08-28-v2-bilingual-posters';
const doctorVersion = db.prepare("SELECT value FROM site_content WHERE key='doctorContentVersion'").get();
if (!doctorVersion || doctorVersion.value !== doctorContentVersion) {
  db.exec('BEGIN');
  try {
    db.exec('DELETE FROM doctors');
    const seed = db.prepare('INSERT INTO doctors (name,name_en,title,title_en,focus,focus_en,bio,credentials,specialties,philosophy,image,enabled,sort_order) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');
    doctorContent.forEach((doctor, index) => seed.run(doctor.name, doctor.nameEn, doctor.title, doctor.titleEn, doctor.focus, doctor.focusEn, doctor.bio, doctor.credentials, doctor.specialties, doctor.philosophy || '', doctor.image, 1, index));
    db.prepare("INSERT INTO site_content (key,value) VALUES ('doctorContentVersion',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").run(doctorContentVersion);
    db.exec('COMMIT');
  } catch (error) { db.exec('ROLLBACK'); throw error; }
}
const app = express();
app.use(cors()); app.use(express.json({ limit: '100kb' }));
app.get('/api/health', (_, res) => res.json({ ok: true }));
app.get('/api/content', (_, res) => { const rows = db.prepare('SELECT key,value FROM site_content').all(); res.json(Object.fromEntries(rows.map((row) => [row.key, row.value]))); });
const doctorSelect = 'id,name,name_en AS nameEn,title,title_en AS titleEn,focus,focus_en AS focusEn,bio,credentials,specialties,philosophy,image,enabled,sort_order AS sortOrder';
app.get('/api/doctors', (_, res) => res.json(db.prepare(`SELECT ${doctorSelect} FROM doctors WHERE enabled=1 ORDER BY sort_order,id`).all()));
app.post('/api/contact', (req, res) => { const { name, phone, message } = req.body || {}; if (!name || !phone || !message || String(name).length > 80 || String(phone).length > 40 || String(message).length > 2000) return res.status(400).json({ error: '请填写完整且有效的信息' }); const result = db.prepare('INSERT INTO contact_submissions (name, phone, message) VALUES (?, ?, ?)').run(String(name).trim(), String(phone).trim(), String(message).trim()); res.status(201).json({ id: result.lastInsertRowid }); });
const adminAuth = (req, res, next) => { const token = process.env.ADMIN_TOKEN; if (token && req.headers['x-admin-token'] !== token) return res.status(401).json({ error: '需要管理员权限' }); next(); };
app.get('/api/admin/contact-submissions', adminAuth, (req, res) => { const limit = Math.min(Number(req.query.limit) || 100, 500); res.json(db.prepare('SELECT * FROM contact_submissions ORDER BY id DESC LIMIT ?').all(limit)); });
app.get('/api/admin/doctors', adminAuth, (_, res) => res.json(db.prepare(`SELECT ${doctorSelect} FROM doctors ORDER BY sort_order,id`).all()));
app.get('/api/admin/uploads', adminAuth, (_, res) => {
  const files = fs.readdirSync(uploadDirectory, { withFileTypes: true }).filter((entry) => entry.isFile()).map((entry) => {
    const filePath = path.join(uploadDirectory, entry.name);
    const stat = fs.statSync(filePath);
    return { url: `/uploads/${encodeURIComponent(entry.name)}`, name: entry.name, size: stat.size, type: /\.(mp4|webm|mov)$/i.test(entry.name) ? 'video' : 'image', updatedAt: stat.mtime.toISOString() };
  }).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  res.json(files);
});
app.post('/api/admin/upload', adminAuth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: '请选择 JPG、PNG、WEBP、GIF、AVIF、MP4、WEBM 或 MOV 文件' });
  res.status(201).json({ url: `/uploads/${encodeURIComponent(req.file.filename)}`, name: req.file.originalname, type: req.file.mimetype.startsWith('video/') ? 'video' : 'image', size: req.file.size });
});
app.patch('/api/admin/contact-submissions/:id', adminAuth, (req, res) => { const status = req.body?.status === 'read' ? 'read' : 'unread'; const result = db.prepare('UPDATE contact_submissions SET status=? WHERE id=?').run(status, req.params.id); if (!result.changes) return res.status(404).json({ error: '记录不存在' }); res.json({ ok: true }); });
app.put('/api/admin/content', adminAuth, (req, res) => { const entries = Object.entries(req.body || {}); const update = db.prepare("INSERT INTO site_content (key,value,updated_at) VALUES (?, ?, datetime('now','localtime')) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at"); db.exec('BEGIN'); try { entries.forEach(([key, value]) => { if (typeof key === 'string' && typeof value === 'string' && key.length < 80 && value.length < 2000) update.run(key, value); }); db.exec('COMMIT'); res.json({ ok: true }); } catch (error) { db.exec('ROLLBACK'); res.status(400).json({ error: error.message }); } });
app.put('/api/admin/doctors', adminAuth, (req, res) => {
  const list = Array.isArray(req.body) ? req.body : [];
  const existingIds = new Set(db.prepare('SELECT id FROM doctors').all().map((doctor) => doctor.id));
  const submittedIds = new Set(list.filter((doctor) => doctor.id).map((doctor) => Number(doctor.id)));
  if (list.some((doctor) => !doctor.name || !doctor.title || !doctor.image)) return res.status(400).json({ error: '医生姓名、职称和图片不能为空' });
  if ([...submittedIds].some((id) => !existingIds.has(id))) return res.status(400).json({ error: '医生记录不存在，请刷新后重试' });
  const update = db.prepare('UPDATE doctors SET name=?,name_en=?,title=?,title_en=?,focus=?,focus_en=?,bio=?,credentials=?,specialties=?,philosophy=?,image=?,enabled=?,sort_order=? WHERE id=?');
  const insert = db.prepare('INSERT INTO doctors (name,name_en,title,title_en,focus,focus_en,bio,credentials,specialties,philosophy,image,enabled,sort_order) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');
  const remove = db.prepare('DELETE FROM doctors WHERE id=?');
  db.exec('BEGIN');
  try {
    existingIds.forEach((id) => { if (!submittedIds.has(id)) remove.run(id); });
    list.forEach((doctor, index) => {
      const values = [String(doctor.name).trim().slice(0, 80), String(doctor.nameEn || '').trim().slice(0, 80), String(doctor.title).trim().slice(0, 120), String(doctor.titleEn || '').trim().slice(0, 120), String(doctor.focus || '').trim().slice(0, 500), String(doctor.focusEn || '').trim().slice(0, 500), String(doctor.bio || '').trim().slice(0, 1200), String(doctor.credentials || '').trim().slice(0, 3000), String(doctor.specialties || '').trim().slice(0, 1200), String(doctor.philosophy || '').trim().slice(0, 300), String(doctor.image).trim().slice(0, 500), doctor.enabled !== false ? 1 : 0, index];
      if (doctor.id) update.run(...values, Number(doctor.id));
      else insert.run(...values);
    });
    db.exec('COMMIT');
    res.json({ ok: true });
  } catch (error) { db.exec('ROLLBACK'); res.status(400).json({ error: error.message }); }
});
app.use('/admin', express.static(path.join(root, 'dist')));
app.use('/web-assets', express.static(path.resolve(root, '../web/public')));
app.use(express.static(path.resolve(root, '../web/public')));
app.get('/admin', (_, res) => res.sendFile(path.join(root, 'dist', 'index.html'), (error) => { if (error) res.sendFile(path.join(root, 'admin.html')); }));
app.listen(process.env.PORT || 4000, () => console.log('圣娅后台 API: http://localhost:4000'));
