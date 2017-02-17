var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack=require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var common={
	output:{
		path: path.join(__dirname,"dist"),
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
		new ExtractTextPlugin({filename:'assets/styles.[contenthash:6].css'})
	]
}

module.exports=env=>([
	Object.assign({},common,{
		name:"browser",
		entry:{
			main:"./src/index.client.js",
			react:["react", "react-dom", "react-router","react-redux", "redux"]
		},
		devtool:env=='dev'&&'cheap-module-eval-source-map',
		devServer:{
			port:8080,
			contentBase:common.output.path,
			historyApiFallback: true
		},
		plugins:common.plugins.concat([
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				names:["react"]
			}),
			...(env=='dev'?[]:[new webpack.optimize.UglifyJsPlugin({
				compress: { warnings: false },
				output: { comments: false }
			})])
		])
	}),
	Object.assign({},common,{
		name: "server",
		entry:"./src/index.server.js",
		target:"node",
		output:Object.assign({},common.output,{
			filename: "server.js",
			libraryTarget:"commonjs2"
		}),
		externals: /^[a-z\-0-9]+$/
	})
])