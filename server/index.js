import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RouterContext,match} from 'react-router'
import {Provider} from 'react-redux'
import bundle,{routes} from '../dist/server'
import fs from 'fs'

const app=express()

var html=fs.readFileSync('./dist/index.html').toString()
app.get('/assets/*',express.static('dist'))
app.get('*',(req,res)=>{
	console.log(routes)
	match({routes,location:req.url},(err, redir,props) => {
		if(err){
			res.status(500).send(err.message)
		}else if(redir){
			res.redirect(302,redir.pathname+redir.search)
		}else if(props){
			var components=renderToString(bundle(props))
			var initialState={a:1}
			var data=html
				.replace("<!-- react-server-html -->",components)
				.replace("<!-- react-server-script -->",`<script>window.__INITIAL_STATE__=${JSON.stringify(initialState)}</script>`)
			res.status(200).send(data)
		}else{
			res.status(404).send('Not found')
		}
	})
})

app.listen(8081)