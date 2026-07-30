import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
