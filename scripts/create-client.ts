#!/usr/bin/env node
/**
 * Scaffolds a new standalone client app under apps/<slug>, seeded from one
 * of the gym demo templates in apps/site-gym/content/templates/*.json.
 *
 * Usage:
 *   pnpm create-client <client-slug> --template <titan|apex|forge|pulse|elite>
 *
 * The generated app is a thin Next.js app that imports all of its actual
 * rendering from @locallaunch/gym-kit (see packages/gym-kit) — it has no
 * basePath and no multi-template registry, since it serves exactly one
 * business at its own root domain. Onboarding a new client is: run this,
 * edit the generated content/business.json, deploy.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TEMPLATE_SLUGS = ['titan', 'apex', 'forge', 'pulse', 'elite'] as const;
type TemplateSlug = (typeof TEMPLATE_SLUGS)[number];

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

function printUsageAndExit(message?: string): never {
  if (message) console.error(`\n${message}`);
  console.error(`
Usage:
  pnpm create-client <client-slug> --template <${TEMPLATE_SLUGS.join('|')}>

Example:
  pnpm create-client fitzone-fitness --template titan

(--template only accepts the gym demo templates today — a future industry
would ship its own kit package and its own set of template names.)
`);
  process.exit(1);
}

function parseArgs(argv: string[]): { slug: string; template: TemplateSlug } {
  const [slug, ...rest] = argv;
  if (!slug || slug.startsWith('-')) {
    printUsageAndExit('Missing client slug.');
  }

  const flagIndex = rest.indexOf('--template');
  const template = flagIndex !== -1 ? rest[flagIndex + 1] : undefined;
  if (!template || !(TEMPLATE_SLUGS as readonly string[]).includes(template)) {
    printUsageAndExit(`Missing or invalid --template. Choose one of: ${TEMPLATE_SLUGS.join(', ')}`);
  }

  return { slug, template: template as TemplateSlug };
}

function isValidSlug(slug: string): boolean {
  return /^[a-z][a-z0-9-]*$/.test(slug) && !slug.endsWith('-');
}

function copyRecursive(src: string, dest: string, replacements: Record<string, string>) {
  const stat = statSync(src);
  if (stat.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) {
      copyRecursive(join(src, entry), join(dest, entry), replacements);
    }
    return;
  }

  const content = readFileSync(src, 'utf8');
  const replaced = Object.entries(replacements).reduce(
    (text, [token, value]) => text.replaceAll(token, value),
    content
  );
  writeFileSync(dest, replaced);
}

function main() {
  const { slug, template } = parseArgs(process.argv.slice(2));

  if (!isValidSlug(slug)) {
    printUsageAndExit('Client slug must be lowercase letters, numbers, and hyphens, and start with a letter (e.g. "fitzone-fitness").');
  }
  if (slug === 'site-gym') {
    printUsageAndExit('"site-gym" is reserved for the multi-template sales demo.');
  }

  const targetDir = join(repoRoot, 'apps', slug);
  if (existsSync(targetDir)) {
    printUsageAndExit(`apps/${slug} already exists — pick a different slug, or remove it first if this was a mistake.`);
  }

  const scaffoldDir = join(repoRoot, 'scripts', 'scaffold', 'client-app');
  const packageName = `@locallaunch/${slug}`;

  copyRecursive(scaffoldDir, targetDir, { __PACKAGE_NAME__: packageName });

  // Seed content/business.json from the chosen demo template — this is the
  // client's starting point, not a live link to the demo (editing it here
  // never affects apps/site-gym's own copy).
  const templateJsonPath = join(repoRoot, 'apps', 'site-gym', 'content', 'templates', `${template}.json`);
  const templateJson = readFileSync(templateJsonPath, 'utf8');
  writeFileSync(join(targetDir, 'content', 'business.json'), templateJson);

  console.log(`\nCreated apps/${slug} (${packageName}), seeded from the "${template}" template.\n`);
  console.log('Next steps:');
  console.log('  1. pnpm install');
  console.log(`  2. Edit apps/${slug}/content/business.json with the client's real business details`);
  console.log(`  3. pnpm --filter ${packageName} dev`);
  console.log('  4. When ready: create a new Vercel project pointed at this app, connect the client\'s domain.\n');
}

main();
