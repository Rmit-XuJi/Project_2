const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist/')
    },

    module: {
        rules: [{
            test: /\.js$/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader?modules'],
        },{
            test: /\.(png|webp)$/,
            use: ['file-loader'],
        }]
    }, 
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          
        })
      ]
};