/** @type {import('next').NextConfig} */
const path = require('path')
// @ts-ignore
const withImages = require('next-images')

const nextConfig = withImages({
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': {page:'/'}, 
      '/raffles': {page:'/raffles'}, 
      '/games': {page:'/games'},  
      '/how-to-play': {page:'/how-to-play'},  
    };
},
sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
  compiler: {
    styledComponents: true,
  },
},

images: {
  loader: "custom",
  disableStaticImages: true,
     
  // formats: ['image/avif', 'image/webp'],
  // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  domains: ['wild-dream-9169.on.fleek.co'],
},

  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            //loader: ['file-loader'],
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
})

module.exports = nextConfig
