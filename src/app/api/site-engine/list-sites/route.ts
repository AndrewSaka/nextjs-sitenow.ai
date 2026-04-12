import { NextResponse } from 'next/server';
import { siteEngineFetch } from '@/lib/site-engine';

export async function GET() {
  try {
    const data = await siteEngineFetch('/v1/account/websites');
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
