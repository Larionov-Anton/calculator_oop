const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'source-map',
	
	devServer: {
		client: {
			overlay: true,
		 },
		static: {
		  directory: baseWebpackConfig.externals.paths.dist,
		},
		compress: true,
		port: 9000,
	 },
	 plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		}),
	 ],
});

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig) 
})


