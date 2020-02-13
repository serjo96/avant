import {API_PATH} from "./core/config";

module.exports = {
  server: {
    port: 8080,
  },
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/markdownit',
    '@bazzite/nuxt-optimized-images',
  ],
  router: {
    middleware: 'clearMessages',
    linkActiveClass: 'nav__link--active',
    linkExactActiveClass: 'your-custom-exact-active-link',
  },
  markdownit: {
    injected: true
  },
  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hippocrates - AI-based medical advisor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700', crossOrigin: 'anonymous'}
    ]
  },
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],
  proxy: {
    '/api/': {
      target: 'http://localhost:3000',
    }
  },
  axios: {
    baseURL: API_PATH
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/email/login', method: 'post', propertyName: 'data.token' },
          user: false,
          logout: false
        }
      }
    },
  },
  plugins: ['@/plugins/my-components', '@/plugins/vue-fragment', { src: '@/plugins/auth',  mode: 'client' }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

