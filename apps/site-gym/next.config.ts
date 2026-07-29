import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/gym',
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
