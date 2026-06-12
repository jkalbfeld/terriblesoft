import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = process.env.SUBSCRIBER_DB_PATH || '/opt/terriblesoft/data/subscribers.db';

function getDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const db = new Database(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      source TEXT DEFAULT 'website',
      ip TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  return db;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email || '').trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const db = getDb();
    const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || 'unknown';

    try {
      db.prepare('INSERT INTO subscribers (email, ip) VALUES (?, ?)').run(email, ip);
    } catch (e: any) {
      if (e.message?.includes('UNIQUE')) {
        return NextResponse.json({ ok: true, message: 'enrolled' });
      }
      throw e;
    }

    return NextResponse.json({ ok: true, message: 'enrolled' });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
