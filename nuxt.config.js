module.exports = {
  server: {
    port: 8080,
  },
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
        if (savedPosition) {
          return savedPosition
        }

        const findEl = async (hash, x) => {
          return document.querySelector(hash) ||
              new Promise((resolve, reject) => {
                if (x > 50) {
                  return resolve()
                }
                setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
              })
        }

        if (to.hash) {
          let el = await findEl(to.hash)
          if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }

        return { x: 0, y: 0 }
      }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'avant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:200,400,700,300,600&display=swap', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', crossOrigin: 'anonymous'}
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
    baseURL: 'http://localhost:3000'
  },
  auth: {
    vuex: {
      namespace: 'Authorization', // Vuex store namespace for keeping state.
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/email/login', method: 'post', propertyName: 'data.token' },
          user: false,
          logout: false
        }
      }
    }
  },
  plugins: ['@/plugins/my-components'],
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

