// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  app: {
    head: {
      // link: [{rel: 'icon', href: '/gmail.ico'}],
      title: 'Gmail Clone'
    }
  }
})
