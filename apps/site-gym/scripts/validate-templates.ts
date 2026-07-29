import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { gymSiteConfigSchema } from '@locallaunch/config-schema';

const dir = join(import.meta.dirname, '..', 'content', 'templates');
const files = readdirSync(dir).filter((f) => f.endsWith('.json'));

let hasError = false;

for (const file of files) {
  const raw = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
  const result = gymSiteConfigSchema.safeParse(raw);
  if (result.success) {
    console.log(`OK   ${file} — theme: ${result.data.theme}, business: ${result.data.business.name}`);
  } else {
    hasError = true;
    console.log(`FAIL ${file}`);
    console.log(JSON.stringify(result.error.format(), null, 2));
  }
}

if (hasError) {
  process.exit(1);
}
