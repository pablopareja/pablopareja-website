/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };

    return config;
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'es-ES'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'pablopareja.com',
        defaultLocale: 'en-US',
      },
    ]
  },
};

module.exports = withPlugins(
  [
    withOptimizedImages({
      optimizeImages: false,
    }),
  ],
  nextConfig
);
