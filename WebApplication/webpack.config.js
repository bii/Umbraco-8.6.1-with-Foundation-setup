const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/js/main.js'),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        
        // Only run `.js` files through Babel
        test: /\.js?$/,
        query: {
          presets: ['@babel/env'],
          "plugins": [
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ],
          compact: true,
          minified: true
        }
      },
    ],
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};