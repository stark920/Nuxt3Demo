import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/content'],
  app: {
    head: {
      title: 'Nuxt3 Demo',
      meta: [
        //
      ],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')]
      })
    ]
  }
});
