import { NextResponse } from 'next/server';
export async function GET() { try { const backend = process.env.ADMIN_API_URL || 'http://localhost:4000'; const response = await fetch(`${backend}/api/content`, { cache: 'no-store' }); return NextResponse.json(await response.json(), { status: response.status }); } catch { return NextResponse.json({}, { status: 502 }); } }
