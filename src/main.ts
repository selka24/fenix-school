import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import routes from './router'
import i18n from './i18n'

export const createApp = ViteSSG(App,{ routes }, ({ app}) => {
  app.use(i18n)
})