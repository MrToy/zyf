const Koa = require('koa')
const serve = require('koa-serve-static')
const logger = require('koa-logger')
const renderToString = require('react-dom/server').renderToString
const mount = require('koa-mount')
const bundle = require('../dist/server.js').default

const app = new Koa()
const template=require('fs').readFileSync('./dist/index.html').toString()

app.use(logger())
app.use(mount('/assets',serve("./dist/assets",{maxAge:30*24*60*1000})))
app.use(ctx=>{
	const res = {status:200}
	var html=renderToString(bundle(ctx.url,res))
	if(res.url){
		ctx.redirect(res.url)
	}else {
		ctx.body=template.replace("<!-- react-content -->",html)
		ctx.status=res.status
	}
})


app.listen(8080)