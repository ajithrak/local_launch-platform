import path from 'node:path';
import type { NextConfig } from 'next';
import { APP_BASE_PATH } from './lib/basePath';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: APP_BASE_PATH,
  // This app lives at apps/site-gym inside a pnpm workspace and depends on
  // sibling packages (@locallaunch/gym-kit, theme-engine, ui, config-schema)
  // via workspace symlinks. Without pointing tracing at the actual monorepo
  // root, Next's output file tracing can pick the wrong root or fail to
  // include those packages' files in the deployed function — the build
  // succeeds locally but Vercel's deploy step fails right after "Collecting
  // build traces...".
  outputFileTracingRoot: path.join(__dirname, '../../'),
  webpack: (config, { dev }) => {
    // The persistent on-disk webpack cache repeatedly fails to write on this
    // machine (rename ENOENT on .pack.gz_ -> .pack.gz), and the corrupted
    // cache then produces malformed JSON that crashes every route with a
    // 500. Disabling it in dev trades a bit of rebuild speed for not
    // recurring every session.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
