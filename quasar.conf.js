module.exports = function(ctx) {
  return {
    boot: ['aos', 'vuelidate', 'axios', 'mixins'],
    css: ['app.sass'],
    extras: [
      'fontawesome-v5',
      'eva-icons',
      'material-icons' // optional, you are not bound to it
    ],
    framework: {
      iconSet: 'material-icons',
      lang: 'en-us',
      all: false,
      components: [
        'QAvatar',
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QScrollArea',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QImg',
        'QInput',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QCarousel',
        'QCarouselSlide',
        'QCard',
        'QCardSection',
        'QBadge',
        'QTooltip',
        'QSelect',
        'QInfiniteScroll',
        'QSpinnerDots',
        'QCheckbox',
        'QSeparator',
        'QToggle',
        'QBanner',
        'QChip'
      ],

      directives: ['Ripple'],
      plugins: ['Notify', 'Dialog', 'Loading']
    },
    supportIE: false,
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      env: ctx.dev
        ? {
            API_URL: JSON.stringify('http://localhost:8000/api/'),
            UPLOADS_URL: JSON.stringify('http://localhost:8000/files/')
          }
        : {
            API_URL: JSON.stringify('http://66.97.35.149:8000/api/'),
            UPLOADS_URL: JSON.stringify('http://66.97.35.149:8000/files/')
          },

      // rtl: false, // https://quasar.dev/options/rtl-support
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // preloadChunks: false,
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
      extendWebpack(cfg) {}
    },
    devServer: {
      https: false,
      port: 8080,
      open: false // opens browser window automatically
    },
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
      manifest: {
        name: 'Bisonte Marroquineria',
        short_name: 'Bisonte Marroquineria',
        description: 'Official Site of Bisonte Marroquineria',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {
      id: 'org.cordova.quasar.app'
    },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      bundler: 'packager',
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },
      builder: {
        appId: 'bisonte'
      },
      nodeIntegration: true,
      extendWebpack(cfg) {}
    }
  };
};
