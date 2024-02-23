// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      // title: 'My Awesome App',
      meta: [
        // { hid: 'description', name: 'description', content: 'My Awesome App Description' },
        // // Open Graph / Facebook
        // { hid: 'og:type', property: 'og:type', content: 'website' },
        // { hid: 'og:url', property: 'og:url', content: 'https://mywebsite.com/' },
        // { hid: 'og:title', property: 'og:title', content: 'My Awesome App' },
        // { hid: 'og:description', property: 'og:description', content: 'My Awesome App Description' },
        { hid: 'og:image', property: 'og:image', content: 'https://quasark.netlify.app/_nuxt/pp_github.f008a3af.webp' },
        
        // Twitter
        // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        // { hid: 'twitter:url', name: 'twitter:url', content: 'https://mywebsite.com/' },
        // { hid: 'twitter:title', name: 'twitter:title', content: 'My Awesome App' },
        // { hid: 'twitter:description', name: 'twitter:description', content: 'My Awesome App Description' },
        // { hid: 'twitter:image', name: 'twitter:image', content: 'https://mywebsite.com/my-awesome-app-image.png' },
      ],
      link: [
        // Include your favicon or any other images for the head section
      ],
    }
  },
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
