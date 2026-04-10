import { NextRequest, NextResponse } from "next/server";

const STAGING_PASSWORD = process.env.STAGING_PASSWORD || "staging2026";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/staging")) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("staging_auth");
  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  const password = request.nextUrl.searchParams.get("password");
  if (password === STAGING_PASSWORD) {
    const url = new URL(pathname, request.url);
    const response = NextResponse.redirect(url);
    response.cookies.set("staging_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return response;
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html>
<head><title>Access Required</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: hsl(240,15%,6%); color: white; font-family: system-ui, sans-serif; }
  .card { text-align: center; max-width: 400px; padding: 2rem; }
  h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
  p { color: rgba(255,255,255,0.5); font-size: 0.875rem; margin-bottom: 1.5rem; }
  form { display: flex; gap: 0.5rem; }
  input { flex: 1; padding: 0.625rem 1rem; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: white; font-size: 0.875rem; outline: none; }
  input:focus { border-color: hsl(258,70%,60%); }
  button { padding: 0.625rem 1.25rem; border-radius: 9999px; border: none; background: white; color: hsl(240,15%,6%); font-size: 0.875rem; font-weight: 600; cursor: pointer; }
</style>
</head>
<body>
  <div class="card">
    <h1>Staging Access</h1>
    <p>Enter the password to view this page.</p>
    <form method="GET">
      <input type="password" name="password" placeholder="Password" required autofocus />
      <button type="submit">Enter</button>
    </form>
  </div>
</body>
</html>`,
    {
      status: 401,
      headers: { "Content-Type": "text/html" },
    }
  );
}

export const config = {
  matcher: ["/staging/:path*"],
};
