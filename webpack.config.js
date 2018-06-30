let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname,
    entry: "./public/js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    watch: debug === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : null,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ],
};