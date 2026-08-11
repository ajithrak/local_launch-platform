import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This app lives inside a pnpm workspace and depends on sibling packages
  // (@locallaunch/healthcare-kit, theme-engine, ui, config-schema) via
  // workspace symlinks. Without pointing tracing at the actual monorepo
  // root, Next's output file tracing can fail to include those packages'
  // files in the deployed function — the build succeeds locally but
  // Vercel's deploy step fails right after "Collecting build traces...".
  outputFileTracingRoot: path.join(__dirname, '../../'),
  webpack: (config, { dev }) => {
    // The persistent on-disk webpack cache can fail to write on some
    // machines (rename ENOENT), and the corrupted cache then produces
    // malformed JSON that crashes every route with a 500. Disabling it in
    // dev trades a bit of rebuild speed for not hitting that.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
