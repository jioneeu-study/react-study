const path = require('path');
//process.env.NODE_ENV = 'production';

module.exports = {
    name: 'Number Baseball Setting',
    devtool: 'eval',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: {
        app: ['./client'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['react-hot-loader/babel'],
                },
            }
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
}