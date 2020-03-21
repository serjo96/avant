import {API_PATH} from "./core/config";

module.exports = {
  server: {
    host: '0.0.0.0', // default: localhost
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
    injected: true,
    renderer: {
      rules: {
        link_open: function (tokens, idx, options, env, self) {
          // If you are sure other plugins can't add `target` - drop check below
          var aIndex = tokens[idx].attrIndex('target');

          if (aIndex < 0) {
            tokens[idx].attrPush(['target', '_blank']); // add new attribute
          } else {
            tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
          }

          // pass token to default renderer.
          return (function(tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
          })();
        }
      }
    },
    use: [
        'markdown-it-emoji'
    ]
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:300,400,700&display=swap', crossOrigin: 'anonymous' },
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
    redirect: {
      login: '/auth/sign-in',
      logout: '/',
      callback: '/auth/sign-in',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/email/login', method: 'post', propertyName: 'data.token.access_token' },
          user: false,
          logout: false
        }
      }
    },
  },
  plugins: [
      '@/plugins/my-components',
      '@/plugins/vue-fragment',
      {
        src: '@/plugins/auth',
        mode: 'client'
      },
    {
      src: '@/plugins/initIndexDB',
      mode: 'client'
    }],
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
};

