const webpack = require('webpack')

// Webpack configuration seems complicated but its not that bad

module.exports = {
  entry: {
    main: './src' // Your source code location is here
  },
  output: {
    filename: '[name].js',
    publicPath: 'out/',
    path: __dirname + '/out' // Output path location
  },
  module: {
    rules: [
      // These rules tell webpack how to process different types of files
      // JS files get transcompiled down to base ECMASCRIPT 5
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'], plugins: ['transform-react-jsx'] } },

      // For example, html and css is loaded in-line with JS
      { test: /\.html$/, use: ['html-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      // Fonts and images, on the other hand, use the url-loader which makes a different file to be downloaded asynchronously
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['url-loader?limit=10000&mimetype=application/font-woff'] },
      { test: /\.[ot]tf$/, use: ['url-loader?limit=65000&mimetype=application/octet-stream'] },
      { test: /\.(png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['file-loader'] },
    ]
  },

  // This makes source maps so debugging is easy
  devtool: 'source-map',

  plugins: [
    // The keyword PRODUCTION will be replaced with the boolean true or false on compile
    // So we can do dev-only things in our code
    new webpack.DefinePlugin({
      'PRODUCTION': JSON.stringify(process.env.NODE_ENV === 'production'),
    })
  ],
}
