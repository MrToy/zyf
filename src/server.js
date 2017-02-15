import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RouterContext,match} from 'react-router'
import {Provider} from 'react-redux'
import routes from './routes'
import fs from 'fs'
import store from './store'

const AppServer=props=>(
	<Provider store={store}>
		<RouterContext {...props}/>
	</Provider>
)

const app=express()

var html=fs.readFileSync('./dist/client/index.html').toString()
app.get('/assets/*',express.static('./dist/client'))
app.get('*',(req,res)=>{
	match({routes,location:req.url},(err, redir,props) => {
		if(err){
			res.status(500).send(err.message)
		}else if(redir){
			res.redirect(302,redir.pathname+redir.search)
		}else if(props){
			var content=renderToString(<AppServer {...props} />)
			var data=html.replace("<!-- react-server-content -->",content)
			res.status(200).send(data)
		}else{
			res.status(404).send('Not found')
		}
	})
})

app.listen(8081)