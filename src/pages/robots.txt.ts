import type { APIRoute } from 'astro';
import { basePath } from '../lib/routes.mjs';

export const GET: APIRoute = ({ site }) => new Response(import.meta.env.PUBLIC_SITE_LIVE === 'true'
  ? `User-agent: *\nAllow: /\nSitemap: ${new URL(basePath('sitemap.xml'), site).href}\n`
  : 'User-agent: *\nDisallow: /\n', {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});
