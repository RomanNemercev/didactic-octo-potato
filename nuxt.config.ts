// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-svgo'
  ],
  svgo: {
    autoImportPath: '~/assets/icons',
    componentPrefix: 'icon',
    dts: true,
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
              inlineStyles: {
                onlyMatchedOnce: false,
              },
            }
          }
        },
      ]
    }
  },
})
