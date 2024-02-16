// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles'
  ],
  particles: {
    mode: 'full',
    lazy: true
  }
});
