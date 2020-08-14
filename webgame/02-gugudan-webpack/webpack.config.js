const path = require('path');

module.exports = {
    name: "Gugudan setting",
    devtool: 'eval',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: {
        app: ['./client']
    },

    module: {
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    }
}