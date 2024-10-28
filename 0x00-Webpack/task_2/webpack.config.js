const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Entry point for JavaScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),  // Output directory
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,  // To handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,  // To handle images
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: false },
              pngquant: { quality: [0.65, 0.90], speed: 4 },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
    ],
  },
  performance: {
    maxAssetSize: 250000,  // Avoids warnings for asset size limit
  },
};
