// 自带的库
const path = require('path')
module.exports = {
	entry: './app/index.js', // 入口文件
	output: {
		path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
		filename: "bundle.js" // 打包后输出文件的文件名
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}],
		rules: [{
			test: /\.scss$/,
			use: [
				"style-loader", // creates style nodes from JS strings
				"css-loader", // translates CSS into CommonJS
				"sass-loader" // compiles Sass to CSS
			]
		}]
	}
}