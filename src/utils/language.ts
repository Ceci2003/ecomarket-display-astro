export type Language = 'bg' | 'en';

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  return 'bg';
}

export function getLocalizedPath(pathname: string, targetLang: Language): string {
  const currentLang = getLanguageFromPath(pathname);
  
  // Remove current language prefix if exists
  let cleanPath = pathname.replace(/^\/en/, '');
  if (cleanPath === '') cleanPath = '/';
  
  // Add target language prefix if needed
  if (targetLang === 'en') {
    return cleanPath === '/' ? '/en' : `/en${cleanPath}`;
  } else {
    return cleanPath;
  }
}

export function getBasePath(lang: Language): string {
  return lang === 'en' ? '/en' : '';
}

