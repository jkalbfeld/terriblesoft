import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

function getDb() {
  // Dynamic require so Next.js doesn't try to bundle better-sqlite3
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Database = require('better-sqlite3')
  const dataDir = process.env.DATA_DIR || path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
  const db = new Database(path.join(dataDir, 'subscribers.db'))
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)
  return db
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = (body.email || '').trim().toLowerCase()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    const db = getDb()
    try {
      db.prepare('INSERT INTO subscribers (email) VALUES (?)').run(email)
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes('UNIQUE')) {
        return NextResponse.json(
          { message: 'This address is already enrolled. Your compliance burden remains unchanged.' },
          { status: 200 }
        )
      }
      throw err
    }

    return NextResponse.json({
      message: 'Enrollment confirmed. You will receive communications on a schedule that reflects our current capacity constraints.'
    })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Internal server error. Please submit Form TS-291.' }, { status: 500 })
  }
}
