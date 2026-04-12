import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    hasApiKey: Boolean(process.env.SITE_ENGINE_API_KEY),
    apiBase: process.env.SITE_ENGINE_API_BASE || null,
    appUrl: process.env.APP_URL || null,
  });
}
