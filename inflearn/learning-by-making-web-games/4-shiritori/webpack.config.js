const path = require('path');
const webpackRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'shiritori-setting',
    mode: 'development', // 실서비스: production
    devtool: 'cheap-module-source-map', 
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: { // input
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react'],
                plugins: [
                    'react-refresh/babel'
                ],
            }
        }],
    },

    plugins: [
        new webpackRefreshPlugin(),
    ],

    output: { // output
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },

    devServer: {
        publicPath: '/dist/',
        hot: true,
    }
};