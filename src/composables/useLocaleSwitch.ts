import { useI18n } from 'vue-i18n'
import { watch, onMounted } from 'vue'

const STORAGE_KEY = 'fenix-lang'

export function useLocaleSwitcher() {
    const { locale } = useI18n()

    // Set language from localStorage if it exists
    onMounted(() => {
        const savedLang = localStorage.getItem(STORAGE_KEY)
        if (savedLang && ['en', 'sq'].includes(savedLang)) {
            locale.value = savedLang
        }
    })

    // Watch for changes and store them
    watch(locale, (newLocale) => {
        localStorage.setItem(STORAGE_KEY, newLocale)
    })

    // Function to manually switch
    const switchLanguage = (lang: 'en' | 'sq') => {
        locale.value = lang
    }

    return {
        locale,
        switchLanguage
    }
}
