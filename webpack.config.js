//const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: __dirname + '/build',
		filename: '[name].js'
	},
	devServer: {
		contentBase: path.join(__dirname, '/build'),
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
                test: /\.scss$/,
				use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    'css-loader',
                    'sass-loader' // compiles Sass to CSS
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: '[id].css'
        })
	]
};

module.exports = config;
