let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./public/js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    watch: debug === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ],
};