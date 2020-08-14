const path = require('path');

module.exports = {
    name: 'GuGuDan page practicing webpack with hooks',
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
                    plugins: [],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },

}