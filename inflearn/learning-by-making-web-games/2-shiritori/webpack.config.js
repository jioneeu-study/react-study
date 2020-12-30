const path = require('path');

module.exports = {
    name: 'shiritori-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 빠르게 하겠다는 의미?
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: { // input
        app: ['./client'], // Shiritori.jsx는 client.jsx에서 불러왔다
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins:  ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: { // output
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};