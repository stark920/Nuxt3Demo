import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import ch_tw from '@/locales/ch-tw.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      ch_tw
    }
  });

  vueApp.use(i18n);
});
