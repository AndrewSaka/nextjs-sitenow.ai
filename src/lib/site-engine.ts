const API_KEY = process.env.SITE_ENGINE_API_KEY;
const API_BASE = process.env.SITE_ENGINE_API_BASE || 'https://api.10web.io';

if (!API_KEY) {
  throw new Error('Missing SITE_ENGINE_API_KEY');
}

type SiteEngineRequestInit = RequestInit & {
  body?: any;
};

export async function siteEngineFetch<T = any>(
  path: string,
  init: SiteEngineRequestInit = {}
): Promise<T> {
  const headers = new Headers(init.headers || {});
  headers.set('Content-Type', 'application/json');
  headers.set('x-api-key', API_KEY);

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
    body:
      init.body && typeof init.body !== 'string'
        ? JSON.stringify(init.body)
        : init.body,
    cache: 'no-store',
  });

  const text = await response.text();
  const data = text ? safeJsonParse(text) : null;

  if (!response.ok) {
    throw new Error(
      `Site engine API error ${response.status}: ${text || response.statusText}`
    );
  }

  return data as T;
}

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
