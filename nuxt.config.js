module.exports = {
  server: {
    port: 8080,
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
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:8000',
    }
  },
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

