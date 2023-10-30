import { Language, LanguageObject, SocialAccount } from '@/types';

export type AvailableLanguages = Language.English | Language.Spanish | Language.German;
export const LANGUAGES: Record<AvailableLanguages, LanguageObject> = {
  [Language.English]: {
    id: Language.English,
    label: 'English',
    lang: 'en',
  },
  [Language.Spanish]: {
    id: Language.Spanish,
    label: 'Español',
    lang: 'es',
  },
  [Language.German]: {
    id: Language.German,
    label: 'Deutsch',
    lang: 'de',
  },
  // {
  //   id: Language.French,
  //   label: 'Français',
  // },
  // {
  //   id: Language.Italian,
  //   label: 'Italiano',
  // },
  // {
  //   id: Language.Portuguese,
  //   label: 'Portugues',
  // },
};

export const SOCIAL_ACCOUNTS: SocialAccount[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/pabloparejamusic/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/pabloparejamusic/',
  },
  {
    id: 'tiktok',
    label: 'Tik Tok',
    url: 'https://www.tiktok.com/@pabloparejamusic',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/pablopareja',
  },
];
