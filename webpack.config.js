var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack=require('webpack')

var common={
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
	}
}

module.exports=[
	Object.assign({},common,{
		name:"browser",
		entry:{
			app:"./src/client.js",
			react:["react", "react-dom", "react-router","react-redux", "redux"]
		},
		output:{
			path: path.join(__dirname,"dist/client"),
			filename: "assets/[name].[chunkhash:6].js",
			publicPath: '/'
		},
		devtool: 'sourcemap',
		devServer:{
			port:8081,
			contentBase:"dist/client",
			historyApiFallback: true
		},
		plugins:[
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			}),
			new webpack.DefinePlugin({
				__BROWSER__:true
			}),
			new webpack.optimize.CommonsChunkPlugin({
				names:["react"]
			})
		]
	}),
	Object.assign({},common,{
		name: "server",
		entry:"./src/server.js",
		target:"node",
		output:{
			path: path.join(__dirname,"dist/client"),
			filename: "../server/index.js",
			libraryTarget:"commonjs2"
		},
		externals: /^[a-z\-0-9]+$/,
		plugins: [
			new webpack.DefinePlugin({
				__BROWSER__:false
			})
		]
	})
]