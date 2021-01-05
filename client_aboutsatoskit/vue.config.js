module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/styles/_variables.sass";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production' 
    ? '/about_satoskit/'
    : '/'
  }