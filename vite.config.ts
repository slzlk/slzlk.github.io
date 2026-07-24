import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // slzlk.github.io 是用户站点，部署在域名根路径。
  base: '/',
})
