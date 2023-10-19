// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: [
    '@/assets/_common.scss',
    'element-plus/dist/index.css',
    '@12-labours/twelve-labours-design-system-components/dist/twelve-labours-design-system-components.css',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: "@use '@/assets/_variables.scss' as *;"
          additionalData: "@use '@12-labours/twelve-labours-design-system-components/src/assets/_variables.scss' as *;"
            // "@import '@12-labours/twelve-labours-design-system-components/src/assets/_variables.scss'",
        },
      }
    }
  },

  modules: [
    '@element-plus/nuxt'
  ],

  elementPlus: { /** Options */ },
})