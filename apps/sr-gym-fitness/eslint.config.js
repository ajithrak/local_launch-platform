import { reactConfig } from '@locallaunch/eslint-config/react';

export default [
  ...reactConfig,
  {
    ignores: ['.next/**', 'next-env.d.ts'],
  },
  {
    // Next.js's App Router requires exporting `metadata`/`generateMetadata`
    // alongside the default page/layout component — that's not a Vite-style
    // Fast Refresh hazard, it's the framework's own convention.
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
];
