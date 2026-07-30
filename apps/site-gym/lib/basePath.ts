/**
 * Single source of truth for the app's Next.js `basePath`. next.config.ts
 * reads it for routing, and client code reads it too — `fetch()` calls to
 * API routes are NOT automatically prefixed with basePath the way
 * `<Link>`/`router.push` are, so anything calling `/api/...` directly must
 * prepend this manually or it 404s.
 */
export const APP_BASE_PATH = '/gym';
