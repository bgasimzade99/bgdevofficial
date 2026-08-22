import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = 'https://bgdevofficial.com';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Updates the document title, meta description, canonical URL, and
 * OpenGraph/Twitter tags for the current route. Client-side only
 * (this is a CRA SPA), but still helps browsers, tab titles, social
 * shares, and any crawler that executes JavaScript.
 */
export function usePageSEO({ title, description, path = '/' }: SEOOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', `${SITE_URL}${path}`);
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path]);
}

/**
 * Injects a JSON-LD structured data script into <head> for the lifetime
 * of the component, then removes it on unmount. Used for Article/BlogPosting
 * schema on individual blog posts.
 */
export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  useEffect(() => {
    if (!data) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [id, data]);
}
