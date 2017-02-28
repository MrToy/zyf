import React from 'react'
import {StaticRouter} from 'react-router-dom'
import express from 'express'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import path from 'path'
import fs from 'fs'
import App from './App'


var html=fs.readFileSync('./dist/client/index.html').toString()


const app=express()
app.get('/assets/*',express.static('./dist/client',{maxAge:30*24*60*1000}))
app.get('*',(req,res)=>{
	const context = {}
	if(context.url){
		res.redirect(302,context.url)
	}else {
		var content=renderToString(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		)
		var data=html.replace("<!-- react-content -->",content)
		res.send(data)
	}
})

app.listen(8080)