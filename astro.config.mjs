import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

export default defineConfig({
  integrations: [vue()],
  output: 'static',
  vite: {
    build: {
      // Preserve both backdrop-filter declarations used by the original site.
      cssMinify: false
    }
  }
})
