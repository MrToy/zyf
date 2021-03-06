var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack=require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')


var postcssLoader={loader:'postcss-loader',options:{plugins:()=>([require('autoprefixer')])}}
var cssLoader={loader:'css-loader',options:{modules:true,importLoaders:1,localIdentName:"[local]-[hash:6]"}}
var common={
	output:{
		path: path.join(__dirname,"dist"),
		filename: "assets/[name].[hash:6].js",
		publicPath: '/'
	},
	resolve: {
		alias: {
			lib:path.join(__dirname, "src")
		}
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude:/node_modules/,
				use:[{
					loader: "babel-loader",
					options:{
						babelrc: false,
						"presets": ["es2015","stage-0","react"],
						"plugins": ["transform-runtime","transform-decorators-legacy"]
					}
				}]
			},
			{ test: /\.css$/,include:/node_modules/,use:ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use:"css-loader"
			})},
			{ test: /\.css$/,exclude:/node_modules/,use:ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use:[cssLoader,postcssLoader]
			})},
			{
				test: /\.styl/,use:ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[cssLoader,postcssLoader,'stylus-loader']
				})
			},
			{
				test: /\.(png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader',
				options:{limit:8912,name:"assets/[name].[hash:6].[ext]"}
			},
			{
				test: /\.(mp4|ogg|svg|htm)$/,
				loader: 'file-loader',
				options:{name:"assets/[name].[hash:6].[ext]"}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename:'assets/styles.[contenthash:6].css'})
	]
}


const prodConfig=Object.assign({},common,{
	name:"browser",
	entry:{
		main:"./src/client.js",
		react:["react", "react-dom", "react-router-dom","mobx", "mobx-react"]
	},
	plugins:common.plugins.concat([
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			favicon:'src/favicon.ico',
			minify:{collapseWhitespace: true}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names:["react"]
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			output: { comments: false }
		})
	])
})

const devConfig=Object.assign({},common,{
	name:"dev-browser",
	entry:[
		'webpack/hot/only-dev-server',
		prodConfig.entry.main
	],
	devtool:'eval-source-map',
	devServer:{
		hot:true,
		port:8888,
		contentBase:common.output.path,
		historyApiFallback: true,
		proxy:{
			'/api':{
				target:'http://localhost:8080'
			}
		}
	},
	plugins:common.plugins.concat([
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template:'src/index.html',favicon:'src/favicon.ico'})
	])
})
devConfig.module.rules[1].use.unshift("react-hot-loader")



module.exports=env=>env=="dev"?devConfig:prodConfig
