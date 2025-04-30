import {ViteSSG} from 'vite-ssg'
import './style.css'
import App from './App.vue'
import routes from './router'
import i18n from './i18n'
import Icon from "./components/Icon.vue";

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: '/',
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
