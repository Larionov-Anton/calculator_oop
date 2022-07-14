const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require('autoprefixer');
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileLoader = require('file-loader');



const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

module.exports = {

	externals: {
		paths: PATHS
	},

	entry: {
		app: PATHS.src
	},

	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},

	 plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`
		}),
		new CopyWebpackPlugin({
			patterns: [
			{from: `${PATHS.src}/img/`, to: `${PATHS.assets}img/`},
			{from: `${PATHS.src}/static/`, to: PATHS.dist},
			]
		}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			minify: {
				collapseWhitespace: false
			}
		}),
	],

	 module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env']
					}
				 }
			},

			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},

			{
				test: /\.css$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					{loader: 'css-loader', options: {url:false}},
				]
			},

			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					{loader: 'css-loader', options: {url:false,  sourceMap: true}},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								sourseMap: true,
								plugins: [
									autoprefixer(),
							  ],
							}
					  }
					},
					{loader: 'sass-loader', options: { sourceMap: true}}	
				]
			},

		]
	 },

	 optimization: {
		minimize: true,
		minimizer: [
			// Минифицирует css так же удаляя комментарии
			new CssMinimizerPlugin({
				minimizerOptions: {
				  preset: [
					 "default",
					 {
						discardComments: { removeAll: true },
					 },
				  ],
				},
			 }),
			// Группирует все медиа запросы в один
			 new CssMqpackerPlugin(),
		]
	 },


};