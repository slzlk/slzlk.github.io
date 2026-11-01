import { createApp } from 'vue'
import { siteConfig } from './config/site'
import App from './App.vue'
import './assets/styles.css'

document.title = siteConfig.title
for (const [name, content] of [['description', siteConfig.description], ['theme-color', siteConfig.theme.background]]) {
  document.querySelector(`meta[name="${name}"]`)?.setAttribute('content', content)
}
for (const [name, value] of Object.entries(siteConfig.theme)) document.documentElement.style.setProperty(`--${name}`, value)
createApp(App).mount('#app')
