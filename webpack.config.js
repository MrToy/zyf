var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')


var assetsPath=path.join(__dirname,"dist")
var publicPath="/"
var loaders=[
	{ 
		test: /\.js$/, 
		loader: "babel-loader",
		exclude:/node_modules/,
		options:{
			babelrc: false,
			"presets": ["es2015","stage-0","react"],
			"plugins": ["transform-decorators-legacy"]
		}
	},
	{ test: /\.css$/, use:["style-loader","css-loader"]},
	{
		test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader',
        options:{limit:8912}
    },
    {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
    }
]

module.exports = [
	{
		name: "browser",
		entry: "./src/index.js",
		devtool: 'sourcemap',
		output: {
			path: assetsPath,
			filename: "[name].[hash].js",
			publicPath: publicPath
		},
		module: {
			rules: loaders
		},
		devServer:{
			port:8080,
			contentBase:"./dist"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			})
		]
	},{
		name: "server",
		entry: "./src/index.js",
		target: "node",
		output: {
			path: assetsPath,
			filename: "server.js",
			publicPath:publicPath ,
			libraryTarget: "commonjs2"
		},
		module: {
			rules: loaders
		}
	}
];