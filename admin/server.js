import express from 'express';
import cors from 'cors';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const db = new DatabaseSync(path.join(root, 'shengya.sqlite'));
db.exec('PRAGMA journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS contact_submissions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone TEXT NOT NULL, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'unread', created_at TEXT NOT NULL DEFAULT (datetime('now','localtime'))); CREATE TABLE IF NOT EXISTS site_content (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT NOT NULL DEFAULT (datetime('now','localtime'))); CREATE TABLE IF NOT EXISTS doctors (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, title TEXT NOT NULL, focus TEXT NOT NULL, image TEXT NOT NULL, enabled INTEGER NOT NULL DEFAULT 1, sort_order INTEGER NOT NULL DEFAULT 0)`);
const doctorColumns = new Set(db.prepare('PRAGMA table_info(doctors)').all().map((column) => column.name));
for (const column of ['name_en', 'title_en', 'focus_en']) {
  if (!doctorColumns.has(column)) db.exec(`ALTER TABLE doctors ADD COLUMN ${column} TEXT NOT NULL DEFAULT ''`);
}
const defaults = { siteName: '圣娅', siteNameEn: 'Saintia', tagline: '专业与温度相遇于圣娅', taglineEn: 'Where expertise meets compassionate care', phone: '021-0000-0000', email: 'service@saintia-medical.com', address: '上海市青浦区蟠中路373号', addressEn: '373 Panzhong Road, Qingpu District, Shanghai', hours: '周一至周日 09:00—22:00', hoursEn: 'Monday–Sunday, 09:00–22:00', heroImage: '/ribenpeizhen/1715069992418710.jpg', heroVideo: '/圣娅医院素材/视频/Weixin Videos2026-08-21_095537_672.mp4' };
const insertContent = db.prepare('INSERT OR IGNORE INTO site_content (key,value) VALUES (?,?)'); Object.entries(defaults).forEach(([key, value]) => insertContent.run(key, value));
const doctorSeed = [['牛勇敢','院长 / 主任医师','整形外科、面部年轻化','/圣娅医院素材/医生/Weixin Image_2026-08-21_095542_340.jpg'],['余东','副主任医师','美容外科、眼部整形','/圣娅医院素材/医生/Weixin Image_2026-08-21_095546_385.jpg'],['齐金杰','主治医师','鼻部整形、轮廓美学','/圣娅医院素材/医生/Weixin Image_2026-08-21_095549_945.jpg'],['李长江','主治医师','美容皮肤科、抗衰管理','/圣娅医院素材/医生/Weixin Image_2026-08-21_095553_582.jpg']];
const doctorCount = db.prepare('SELECT COUNT(*) AS count FROM doctors').get().count; if (!doctorCount) { const seed = db.prepare('INSERT INTO doctors (name,title,focus,image,sort_order) VALUES (?,?,?,?,?)'); doctorSeed.forEach((doctor, index) => seed.run(...doctor, index)); }
const doctorTranslations = {
  牛勇敢: ['Niu Yonggan', 'Director / Chief Physician', 'Plastic surgery and facial rejuvenation'],
  余东: ['Yu Dong', 'Associate Chief Physician', 'Aesthetic and eye surgery'],
  齐金杰: ['Qi Jinjie', 'Attending Physician', 'Rhinoplasty and facial contouring'],
  李长江: ['Li Changjiang', 'Attending Physician', 'Aesthetic dermatology and anti-ageing care'],
};
const fillDoctorEnglish = db.prepare("UPDATE doctors SET name_en=CASE WHEN name_en='' THEN ? ELSE name_en END,title_en=CASE WHEN title_en='' THEN ? ELSE title_en END,focus_en=CASE WHEN focus_en='' THEN ? ELSE focus_en END WHERE name=?");
Object.entries(doctorTranslations).forEach(([name, english]) => fillDoctorEnglish.run(...english, name));
const app = express();
app.use(cors()); app.use(express.json({ limit: '100kb' }));
app.get('/api/health', (_, res) => res.json({ ok: true }));
app.get('/api/content', (_, res) => { const rows = db.prepare('SELECT key,value FROM site_content').all(); res.json(Object.fromEntries(rows.map((row) => [row.key, row.value]))); });
app.get('/api/doctors', (_, res) => res.json(db.prepare('SELECT id,name,name_en AS nameEn,title,title_en AS titleEn,focus,focus_en AS focusEn,image,enabled,sort_order AS sortOrder FROM doctors WHERE enabled=1 ORDER BY sort_order,id').all()));
app.post('/api/contact', (req, res) => { const { name, phone, message } = req.body || {}; if (!name || !phone || !message || String(name).length > 80 || String(phone).length > 40 || String(message).length > 2000) return res.status(400).json({ error: '请填写完整且有效的信息' }); const result = db.prepare('INSERT INTO contact_submissions (name, phone, message) VALUES (?, ?, ?)').run(String(name).trim(), String(phone).trim(), String(message).trim()); res.status(201).json({ id: result.lastInsertRowid }); });
const adminAuth = (req, res, next) => { const token = process.env.ADMIN_TOKEN; if (token && req.headers['x-admin-token'] !== token) return res.status(401).json({ error: '需要管理员权限' }); next(); };
app.get('/api/admin/contact-submissions', adminAuth, (req, res) => { const limit = Math.min(Number(req.query.limit) || 100, 500); res.json(db.prepare('SELECT * FROM contact_submissions ORDER BY id DESC LIMIT ?').all(limit)); });
app.patch('/api/admin/contact-submissions/:id', adminAuth, (req, res) => { const status = req.body?.status === 'read' ? 'read' : 'unread'; const result = db.prepare('UPDATE contact_submissions SET status=? WHERE id=?').run(status, req.params.id); if (!result.changes) return res.status(404).json({ error: '记录不存在' }); res.json({ ok: true }); });
app.put('/api/admin/content', adminAuth, (req, res) => { const entries = Object.entries(req.body || {}); const update = db.prepare("INSERT INTO site_content (key,value,updated_at) VALUES (?, ?, datetime('now','localtime')) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at"); db.exec('BEGIN'); try { entries.forEach(([key, value]) => { if (typeof key === 'string' && typeof value === 'string' && key.length < 80 && value.length < 2000) update.run(key, value); }); db.exec('COMMIT'); res.json({ ok: true }); } catch (error) { db.exec('ROLLBACK'); res.status(400).json({ error: error.message }); } });
app.put('/api/admin/doctors', adminAuth, (req, res) => { const list = Array.isArray(req.body) ? req.body : []; const update = db.prepare('UPDATE doctors SET name=?,name_en=?,title=?,title_en=?,focus=?,focus_en=?,image=?,enabled=?,sort_order=? WHERE id=?'); db.exec('BEGIN'); try { list.forEach((doctor, index) => { if (doctor.id && doctor.name && doctor.title) update.run(String(doctor.name).slice(0,80), String(doctor.nameEn || '').slice(0,80), String(doctor.title).slice(0,120), String(doctor.titleEn || '').slice(0,120), String(doctor.focus || '').slice(0,200), String(doctor.focusEn || '').slice(0,200), String(doctor.image || '').slice(0,500), doctor.enabled ? 1 : 0, index, Number(doctor.id)); }); db.exec('COMMIT'); res.json({ ok: true }); } catch (error) { db.exec('ROLLBACK'); res.status(400).json({ error: error.message }); } });
app.use('/admin', express.static(path.join(root, 'dist')));
app.use('/web-assets', express.static(path.resolve(root, '../web/public')));
app.use(express.static(path.resolve(root, '../web/public')));
app.get('/admin', (_, res) => res.sendFile(path.join(root, 'dist', 'index.html'), (error) => { if (error) res.sendFile(path.join(root, 'admin.html')); }));
app.listen(process.env.PORT || 4000, () => console.log('圣娅后台 API: http://localhost:4000'));
