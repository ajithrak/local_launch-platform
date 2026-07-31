'use client';

import { createContext, useContext, type ReactNode } from 'react';

const TemplateBasePathContext = createContext<string>('');

export function TemplateBasePathProvider({
  basePath,
  children,
}: {
  basePath: string;
  children: ReactNode;
}) {
  return <TemplateBasePathContext.Provider value={basePath}>{children}</TemplateBasePathContext.Provider>;
}

/** The current template's base path (e.g. "/titan"), for building internal links. */
export function useTemplateBasePath(): string {
  return useContext(TemplateBasePathContext);
}

const AssetBasePathContext = createContext<string>('');

export function AssetBasePathProvider({
  assetBasePath,
  children,
}: {
  assetBasePath: string;
  children: ReactNode;
}) {
  return <AssetBasePathContext.Provider value={assetBasePath}>{children}</AssetBasePathContext.Provider>;
}

/**
 * Prefix for raw <img> src paths pointing into /public — e.g. "/gym" when the
 * app is deployed under Next's `basePath` config, empty for single-client
 * apps with no basePath. Next.js doesn't auto-prefix plain <img src> the way
 * it does <Link>/router navigation, so every image-rendering component must
 * apply this manually.
 */
export function useAssetBasePath(): string {
  return useContext(AssetBasePathContext);
}
