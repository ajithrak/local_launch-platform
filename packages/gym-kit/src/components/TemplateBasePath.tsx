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
