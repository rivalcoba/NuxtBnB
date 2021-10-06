export default {
  // Enable auto importation of components
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class:['my-style'],
    },
    meta: [
      {
        charset: 'utf-8',
      }
    ]
  },
  // Desabilita prefetch de rutas, es true por defecto
  router: {
    prefetchLinks: false,
  },
  env: {
    googleApiKey: process.env.GOOGLE_API_KEY
  }
};
