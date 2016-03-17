const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: ['./pages/main.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'pages'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.styl$/,
                loaders: ['style', 'css', 'stylus'],
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
        ],
    },
};
