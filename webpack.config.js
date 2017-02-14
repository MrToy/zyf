var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack=require('webpack')

var common={
	entry: "./src/index.js",
	output:{
		path: path.join(__dirname,"dist"),
		filename: "assets/[name].[hash].js",
		publicPath: '/'
	},
	module: {
		rules:[
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
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			__BROWSER__:true
		})
	]
}

module.exports=[
	Object.assign({},common,{
		name:"browser",
		devtool: 'sourcemap',
		devServer:{
			port:8081,
			contentBase:"dist",
			historyApiFallback: true
		}
	}),
	Object.assign({},common,{
		name: "server",
		target:"node",
		output:Object.assign({},common.output,{
			filename: "server.js",
			libraryTarget:"commonjs2"
		}),
		plugins: [
			new webpack.DefinePlugin({
				__BROWSER__:false
			})
		]
	})
]