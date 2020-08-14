const path = require('path');

module.exports = {
    name: 'Shiritori Setting',
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
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1% in US']
                            },
                            debug: true,
                        }],
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },

}