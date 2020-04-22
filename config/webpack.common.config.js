const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const theme = require('../theme-config.js');
const Mode = process.env.NODE_ENV !== 'production';

module.exports = {
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[hash:8].async.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: Mode,
                        }
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            // {
            //     test: /\.less$/,
            //     include: /node_modules/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //                 hmr: Mode,
            //             }
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: {
            //                     modules: true,
            //                     localIdentName: '[name]_[local]_[hash:base64:5]',
            //                 }
            //             }
            //         },
            //         {
            //             loader: 'less-loader',
            //             options: {
            //                 javascriptEnabled: true,
            //                 modifyVars: theme,
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader'
            //         }
            //     ]
            // },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme,
                        },
                    },
                ],
                exclude: /src/,
            },
            {
                test: /(\.js|\.jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|jpeg|png|svg|git|swf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: Mode ? '[name].css' : '[name].[hash:8].css',
            chunkFilename: Mode ? '[id].css' : '[id].[hash:8].css',
            ignoreOrder: false,
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, '../public'),
                }
            ]
        ),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}

