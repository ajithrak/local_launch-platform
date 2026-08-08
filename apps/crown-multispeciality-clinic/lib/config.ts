import { healthcareSiteConfigSchema } from '@locallaunch/config-schema';
import businessRaw from '../content/business.json';

/**
 * This site has exactly one client, so there's no template registry to look
 * up — just parse the one config file once. Throws loudly at build/dev
 * startup if content/business.json ever drifts from the schema.
 */
export const config = healthcareSiteConfigSchema.parse(businessRaw);
