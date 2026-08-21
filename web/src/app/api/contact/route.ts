import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const backend = process.env.ADMIN_API_URL || 'http://localhost:4000';
    const response = await fetch(`${backend}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), cache: 'no-store' });
    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ error: '暂时无法连接咨询服务' }, { status: 502 });
  }
}
