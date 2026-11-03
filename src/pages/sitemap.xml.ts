import type { APIRoute } from 'astro';
import { pages, languages, href } from '../lib/routes.mjs';

const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]!);

export const GET: APIRoute = ({ site }) => {
  const entries = import.meta.env.PUBLIC_SITE_LIVE === 'true' ? pages.flatMap(page => languages.map(lang => {
    const location = escapeXml(new URL(href(page, lang), site).href);
    const alternates = languages.map(language => `<xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(new URL(href(page, language), site).href)}"/>`).join('');
    return `<url><loc>${location}</loc>${alternates}</url>`;
  })) : [];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('\n')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
