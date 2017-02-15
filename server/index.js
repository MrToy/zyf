import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RouterContext,match} from 'react-router'
import {Provider} from 'react-redux'
import {routes,Box} from '../dist/server'
import fs from 'fs'

var html=fs.readFileSync('./dist/index.html').toString()

const app=express()
app.get('/assets/*',express.static('./dist',{maxAge:30*24*60*1000}))
app.get('*',(req,res)=>{
	match({routes,location:req.url},(err, redir,props) => {
		if(err){
			res.status(500).send(err.message)
		}else if(redir){
			res.redirect(302,redir.pathname+redir.search)
		}else if(props){
			var content=renderToString(Box(props))
			var data=html.replace("<!-- react-server-content -->",content)
			res.status(200).send(data)
		}else{
			res.status(404).send('Not found')
		}
	})
})

app.listen(8081)