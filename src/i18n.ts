import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sq from './locales/sq.json'

export default createI18n({
  legacy: false,
  locale: 'sq', // default to Albanian
  fallbackLocale: 'en',
  messages: {
    en: {
      ...en,
    },
    sq: {
      ...sq,
    },
  }
})
