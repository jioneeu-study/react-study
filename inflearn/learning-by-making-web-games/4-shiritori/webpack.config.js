const path = require('path');

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
                presets: ['@babel/preset-react']
            }
        }]
    },

    output: { // output
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};