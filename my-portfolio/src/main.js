import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import ES from './locale/es.json'

const i18n = createI18n({
  locale: 'es',
  messages: {
    en: EN,
    es: ES
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
