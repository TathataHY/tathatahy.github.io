import cvES from './cv/es.json';
import cvEN from './cv/en.json';

export const loadCV = (lang: string) => {
  return lang === 'en' ? cvEN : cvES;
}; 