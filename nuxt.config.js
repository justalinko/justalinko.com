export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JUSTALINKO (?) - Web Developers',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author' , content: 'justalinko'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://ui-avatars.com/api/?name=JST&background=000&color=eee&length=3&size=9' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/custom'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // environment variables
  env: {
    'telegrambot_apikey' : 'bot2018552197:AAGTc-CeyfTf4zSiIUDzv8v56Z6n89LpWzE',
    'github_username' : 'justalinko',
    'profile_email' : 'alinkokomansuby@gmail.com',
    'profile_web' : 'https://justalinko.com'
  },
  // nuxt loading
  loading: {
    height: '4px',
    color: 'red',
    duration:5000
  }
}
