// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", 
    [
      "@nuxtjs/i18n",
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'es',
        locales: [
          {
            code: 'en',
            name: 'English',
            file: './i18n/en.js',
          },
          {
            code: 'es',
            name: 'Español',
            file: './i18n/es.js',
          }
        ]
      }
    ]
  ],
  
})