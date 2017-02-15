var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack=require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var common={
	output:{
		path: path.join(__dirname,"dist/client"),
		filename: "assets/[name].[chunkhash:6].js",
		publicPath: '/'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				enforce: "pre",
				loader: "eslint-loader",
				exclude: /node_modules/,
				options:{
					"parser": "babel-eslint",
					"plugins": ["react"],
					"parserOptions": {
						"sourceType": "module",
						"ecmaFeatures": {"jsx": true}
					},
					"env": {"browser": true,"amd": true,"es6": true,"node": true},
					"rules": {
						"no-extra-semi": 1,
						"no-unused-vars": 1,
						"no-trailing-spaces": [1, { "skipBlankLines": true }],
						"no-unreachable": 1,
						"react/jsx-uses-react": 1,
						"react/jsx-uses-vars": 1
					}
				}
			},
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
			{ test: /\.css$/, use:ExtractTextPlugin.extract({use:"css-loader"})},
			{
				test: /\.(png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader',
				options:{limit:8912}
			},
			{
				test: /\.(mp4|ogg|svg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.styl/,
				use:ExtractTextPlugin.extract({
					use:[{
						loader:'css-loader',
						options:{modules:true}
					},'stylus-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename:'assets/styles-[contenthash:6].css'})
	]
}

module.exports=[
	Object.assign({},common,{
		name:"browser",
		entry:{
			app:"./src/client.js",
			react:["react", "react-dom", "react-router","react-redux", "redux"]
		},
		devtool: 'sourcemap',
		devServer:{
			port:8081,
			contentBase:"dist/client",
			historyApiFallback: true
		},
		plugins:common.plugins.concat([
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				names:["react"]
			})
		])
	}),
	Object.assign({},common,{
		name: "server",
		entry:"./src/server.js",
		target:"node",
		output:Object.assign({},common.output,{
			filename: "../server/index.js",
			libraryTarget:"commonjs2"
		}),
		externals: /^[a-z\-0-9]+$/
	})
]