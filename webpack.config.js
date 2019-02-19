//const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                })
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
        /*new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: '[id].css'
        })*/
        new ExtractTextPlugin('style.css')
	]
};

module.exports = config;
