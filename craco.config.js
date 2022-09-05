const webpack = require('webpack')

module.exports = {
  webpack: {
    configure: {  
      resolve: {
        alias: {
          assert: 'assert',
          buffer: 'buffer',
          crypto: 'crypto-browserify',
          http: 'stream-http',
          https: 'https-browserify',
          os: 'os-browserify/browser',
          process: 'process/browser',
          stream: 'stream-browserify',
          util: 'util',
        },
        fallback: {
          "path": require.resolve("path-browserify"),
          "zlib": require.resolve("browserify-zlib"),
        }
      },
      experiments: {
        asyncWebAssembly: true
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        })
      ],
      ignoreWarnings: [{ message: /Failed to parse source map from/ }],
      module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
            resolve: {
              fullySpecified: false
            }
          }
        ]
      }
    }
  }
}
