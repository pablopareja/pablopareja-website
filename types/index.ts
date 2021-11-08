export interface ImageData {
  src: string;
  alt: string;
}

export enum Language {
  English = 'en',
  Spanish = 'es',
  Italian = 'it',
  French = 'fr',
  Portuguese = 'pt',
}

export interface LanguageObject {
  id: Language;
  label: string;
  lang: string;
}
