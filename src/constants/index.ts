import { Language, LanguageObject, SocialAccount } from "@/types";

export const LANGUAGES: LanguageObject[] = [
  {
    id: Language.English,
    label: "English",
    lang: "en",
  },
  {
    id: Language.Spanish,
    label: "Español",
    lang: "es",
  },
  {
    id: Language.German,
    label: "Deutsch",
    lang: "de",
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
];

export const SOCIAL_ACCOUNTS: SocialAccount[] = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/pabloparejamusic/",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/pabloparejamusic/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@pabloparejamusic",
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/pablopareja",
  },
];
