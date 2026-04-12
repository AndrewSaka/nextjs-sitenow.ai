'use client';

import { useState } from 'react';

export default function SiteEngineTestPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function testCreateSite() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/site-engine/create-site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subdomain: `sitenow-test-${Date.now()}`.slice(0, 40).toLowerCase(),
          region: 'us-central1-c',
          site_title: 'SiteNow Test',
          admin_username: 'sitenow_admin',
          admin_password: 'SiteNow2026!',
          is_demo: 0,
          business_type: 'agency',
          business_name: 'SiteNow Demo',
          business_description: 'A modern AI-powered website builder for small businesses',
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      setResult({ ok: false, error: e.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Site Engine Test</h1>
      <button onClick={testCreateSite} disabled={loading}>
        {loading ? 'Creating...' : 'Create test site'}
      </button>

      <pre style={{ marginTop: 24, whiteSpace: 'pre-wrap' }}>
        {result ? JSON.stringify(result, null, 2) : 'No result yet'}
      </pre>
    </main>
  );
}
