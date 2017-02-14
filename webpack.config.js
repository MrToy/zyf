var path=require('path')

var assetsPath="./build"
var publicPath="./public"
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
	{ test: /\.png$/, loader: "url-loader" },
	{ test: /\.jpg$/, loader: "file-loader" },
	{ test: /\.css$/, use:["style-loader","css-loader"]}
]

module.exports = [
	{
		name: "browser",
		entry: "./src/index.js",
		output: {
			path: assetsPath,
			filename: "client.js",
			publicPath: publicPath
		},
		module: {
			rules: loaders
		}
	},{
		name: "server",
		entry: "./src/index.js",
		target: "node",
		output: {
			path: assetsPath,
			filename: "server.js",
			publicPath: publicPath,
			libraryTarget: "commonjs2"
		},
		externals: /^[a-z\-0-9]+$/,
		module: {
			rules: loaders
		}
	}
];