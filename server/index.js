const Koa = require('koa')
const serve = require('koa-serve-static')
const logger = require('koa-logger')
const mongo = require('koa-mongo')
const {renderToString} = require('react-dom/server')
const mount = require('koa-mount')
const koaBody = require('koa-body')
const bundle = require('../dist/server.js').default
const Router = require('koa-router')
const cors = require('koa-cors')
const article = require('./article')
const configs = require('./config')
const user = require('./user')

const template=require('fs').readFileSync('./dist/index.html').toString()


const router = new Router()
router.use('/article',article.routes(),article.allowedMethods())
router.use('/config',configs.routes(),configs.allowedMethods())
router.use('/user',user.routes(),user.allowedMethods())

const app = new Koa()
app.use(logger())
app.use(cors())
app.use(mongo({uri: 'mongodb://mongo/zyf'}))
app.use(koaBody({formidable:{uploadDir:'./upload',keepExtensions:true}}))
app.use(mount('/assets',serve("./dist/assets",{maxAge:30*24*60*1000})))
app.use(mount('/upload',serve("./upload",{maxAge:30*24*60*1000})))
app.use(mount('/api',router.routes()))
app.use(async ctx=>{
	const res = {status:200}
	var html=renderToString(bundle(ctx.url,res))
	if(res.url){
		ctx.redirect(res.url)
	}else if(res.status==404){
		ctx.status=404
	}else{
		ctx.status=res.status
		ctx.body=template.replace("<!-- react-content -->",html)
	}
})


app.listen(8080)
