import express from 'express'
import {renderToString} from 'react-dom/server'
import path from 'path'
import fs from 'fs'
import bundle from '../dist/server'

var template=fs.readFileSync('./dist/client/index.html').toString()


const app=express()
app.get('/assets/*',express.static('./dist/client',{maxAge:30*24*60*1000}))
app.get('*',(req,res)=>{
	const context = {
		status:200
	}
	var html=renderToString(bundle(req.url,context))
	if(context.url){
		res.redirect(302,context.url)
	}else {
		var data=template.replace("<!-- react-content -->",html)
		res.status(context.status).send(data)
	}
})

app.listen(8080)