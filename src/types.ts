export interface ImageData {
  src: string;
  alt: string;
}

export enum Language {
  English = 'en',
  Spanish = 'es',
  Italian = 'it',
  French = 'fr',
  German = 'de',
  Portuguese = 'pt',
}

export interface LanguageObject {
  id: Language;
  label: string;
  lang: string;
}

export interface SocialAccount {
  id: string;
  label: string;
  url: string;
}
