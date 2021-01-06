//const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  pwa: {
    name: 'uocify',
    manifestPath : 'manifest.json',
    manifestOptions : {
      name : 'uocify',
      short_name : 'uocify',
      start_url : '.',
      display_name : 'standalone',
      theme_Color : 'themeColor',
    },
    iconPaths : {
      favicon16 : 'public/favicon.ico',
      logo : 'src/assets/logo.svg',
      icon : 'src/assets/icon.svg',
      iconsad : 'src/assets/icon-sad.svg',
    },
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
};