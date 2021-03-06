/* globals __dirname */
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
module.exports = {
    context: __dirname ,
    entry: __dirname + '/client/index.js',
    output: {
        path: __dirname + '/public-',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};
