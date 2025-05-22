import './style.css'
import {ViteSSG} from 'vite-ssg'
import App from './App.vue'
import routes from './router/router.ts'
import i18n from './i18n'
import Icon from "./components/Icon.vue";

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: '/',
    scrollBehavior() {
      return { top: 0 }
    }
  },
  ({app, router}) => {
    router.afterEach((to) => {
      const titleKey = to.meta?.titleKey
      if (titleKey && !import.meta.env.SSR) {
        document.title = i18n.global.t(titleKey as string)
      }
    })
    app.component('Icon', Icon)
    app.use(i18n)
  }
)
