const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        index: './src/index.ts',
        store: './src/store/localStore.ts',
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        library: 'jbreek',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.htm'],
        alias: {}
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: "ts-loader"},
            {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
            {test: /\.htm$/, loader: 'html-loader'},
            {test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader?limit=100000'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.html$/, loader: "file-loader?name=[name].[ext]"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        })
    ]
};
