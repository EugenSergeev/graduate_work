const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader',
                    'postcss-loader'
                ]
            },{
            test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader?name=./images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },{
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },{
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: 'style.[contenthash].css'
            }
        ),
        new OptimizeCssAssetsPlugin(
            {
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default'],
                },
                canPrint: true
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: false,
                template: './src/index.html',
                filename: 'index.html',
                chunks: ['main']
            }
        ),
        new HtmlWebpackPlugin(
          {
              template: './src/about.html',
              filename: 'about.html',
              chunks: ['exampleEntry']
          }
        ),
        new HtmlWebpackPlugin(
          {
              template: './src/analitics.html',
              filename: 'analitics.html',
              chunks: ['exampleEntry']
          }
        ),

        new WebpackMd5Hash(),
   //     new FaviconsWebpackPlugin('/src/path/to/logo.png'),
        new webpack.DefinePlugin(
            {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        )
    ]
}
