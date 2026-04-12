import { NextRequest, NextResponse } from 'next/server';
import { siteEngineFetch } from '@/lib/site-engine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = await siteEngineFetch('/v1/hosting/ai-website', {
      method: 'POST',
      body: {
        subdomain: body.subdomain,
        region: body.region || 'us-central1-c',
        site_title: body.site_title,
        admin_username: body.admin_username,
        admin_password: body.admin_password,
        is_demo: body.is_demo ?? 1,
        demo_domain_delete_after_days: body.demo_domain_delete_after_days ?? 7,
        business_type: body.business_type,
        business_name: body.business_name,
        business_description: body.business_description,
      },
    });

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
