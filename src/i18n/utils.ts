import { defaultLang, ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'ru') return 'ru';
  return defaultLang;
}

export function t(lang: Lang) {
  return ui[lang];
}

export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}

export function alternateLang(lang: Lang): Lang {
  return lang === 'be' ? 'ru' : 'be';
}