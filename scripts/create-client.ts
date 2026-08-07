#!/usr/bin/env node
/**
 * Scaffolds a new standalone client app under apps/<slug>, seeded from one
 * of the gym or healthcare demo templates.
 *
 * Usage:
 *   pnpm create-client <client-slug> --template <titan|apex|forge|pulse|elite>
 *   pnpm create-client <client-slug> --industry healthcare --template <mednova|careplus|orthoedge|smilecraft|mothercare>
 *
 * The generated app is a thin Next.js app that imports all of its actual
 * rendering from @locallaunch/gym-kit or @locallaunch/healthcare-kit — it has
 * no basePath and no multi-template registry, since it serves exactly one
 * business at its own root domain. Onboarding a new client is: run this,
 * edit the generated content/business.json, deploy.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const INDUSTRIES = ['gym', 'healthcare'] as const;
type Industry = (typeof INDUSTRIES)[number];

const TEMPLATE_SLUGS: Record<Industry, readonly string[]> = {
  gym: ['titan', 'apex', 'forge', 'pulse', 'elite'],
  healthcare: ['mednova', 'careplus', 'orthoedge', 'smilecraft', 'mothercare'],
};

const SCAFFOLD_DIR: Record<Industry, string> = {
  gym: 'client-app',
  healthcare: 'client-app-healthcare',
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

function printUsageAndExit(message?: string): never {
  if (message) console.error(`\n${message}`);
  console.error(`
Usage:
  pnpm create-client <client-slug> --template <${TEMPLATE_SLUGS.gym.join('|')}>
  pnpm create-client <client-slug> --industry healthcare --template <${TEMPLATE_SLUGS.healthcare.join('|')}>

Example:
  pnpm create-client fitzone-fitness --template titan
  pnpm create-client diyas-dental --industry healthcare --template smilecraft

(--industry defaults to "gym" when omitted.)
`);
  process.exit(1);
}

function parseArgs(argv: string[]): { slug: string; industry: Industry; template: string } {
  const [slug, ...rest] = argv;
  if (!slug || slug.startsWith('-')) {
    printUsageAndExit('Missing client slug.');
  }

  const industryFlagIndex = rest.indexOf('--industry');
  const industryArg = industryFlagIndex !== -1 ? rest[industryFlagIndex + 1] : 'gym';
  if (!(INDUSTRIES as readonly string[]).includes(industryArg)) {
    printUsageAndExit(`Invalid --industry. Choose one of: ${INDUSTRIES.join(', ')}`);
  }
  const industry = industryArg as Industry;

  const templateFlagIndex = rest.indexOf('--template');
  const template = templateFlagIndex !== -1 ? rest[templateFlagIndex + 1] : undefined;
  if (!template || !TEMPLATE_SLUGS[industry].includes(template)) {
    printUsageAndExit(`Missing or invalid --template for industry "${industry}". Choose one of: ${TEMPLATE_SLUGS[industry].join(', ')}`);
  }

  return { slug, industry, template };
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

function stripGymImages(templateJson: any) {
  delete templateJson.business?.logo;
  for (const image of templateJson.gallery ?? []) delete image.src;
  for (const trainer of templateJson.trainers ?? []) delete trainer.photo;
  for (const item of templateJson.transformations ?? []) {
    delete item.beforeSrc;
    delete item.afterSrc;
  }
}

function stripHealthcareImages(templateJson: any) {
  delete templateJson.business?.logo;
  delete templateJson.about?.image;
  for (const image of templateJson.gallery ?? []) delete image.src;
  for (const doctor of templateJson.doctors ?? []) delete doctor.photo;
}

function main() {
  const { slug, industry, template } = parseArgs(process.argv.slice(2));

  if (!isValidSlug(slug)) {
    printUsageAndExit('Client slug must be lowercase letters, numbers, and hyphens, and start with a letter (e.g. "fitzone-fitness").');
  }
  if (slug === 'site-gym' || slug === 'site-healthcare') {
    printUsageAndExit(`"${slug}" is reserved for the multi-template sales demo.`);
  }

  const targetDir = join(repoRoot, 'apps', slug);
  if (existsSync(targetDir)) {
    printUsageAndExit(`apps/${slug} already exists — pick a different slug, or remove it first if this was a mistake.`);
  }

  const scaffoldDir = join(repoRoot, 'scripts', 'scaffold', SCAFFOLD_DIR[industry]);
  const packageName = `@locallaunch/${slug}`;

  copyRecursive(scaffoldDir, targetDir, { __PACKAGE_NAME__: packageName });

  // Seed content/business.json from the chosen demo template — this is the
  // client's starting point, not a live link to the demo (editing it here
  // never affects the source app's own copy).
  const demoApp = industry === 'gym' ? 'site-gym' : 'site-healthcare';
  const templateJsonPath = join(repoRoot, 'apps', demoApp, 'content', 'templates', `${template}.json`);
  const templateJson = JSON.parse(readFileSync(templateJsonPath, 'utf8'));

  // The demo templates' image paths (e.g. "/images/titan/...") only resolve
  // under the demo app's own /public folder and its basePath — they'd 404 in
  // a freshly generated client app, which has neither. Strip them so every
  // new client starts from the clean swatch-placeholder look until real
  // photos are sourced for that specific business.
  if (industry === 'gym') {
    stripGymImages(templateJson);
  } else {
    stripHealthcareImages(templateJson);
  }

  mkdirSync(join(targetDir, 'content'), { recursive: true });
  writeFileSync(join(targetDir, 'content', 'business.json'), JSON.stringify(templateJson, null, 2) + '\n');

  console.log(`\nCreated apps/${slug} (${packageName}), seeded from the "${template}" ${industry} template.\n`);
  console.log('Next steps:');
  console.log('  1. pnpm install');
  console.log(`  2. Edit apps/${slug}/content/business.json with the client's real business details`);
  console.log(`  3. pnpm --filter ${packageName} dev`);
  console.log('  4. When ready: create a new Vercel project pointed at this app, connect the client\'s domain.\n');
}

main();
