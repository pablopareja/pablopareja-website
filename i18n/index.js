const en = require('./translations.en.json');
const es = require('./translations.es.json');

const i18n = {
  translations: {
    en: en.i18n,
    es: es.i18n,
  },
  defaultLang: 'en',
};

module.exports = i18n;
