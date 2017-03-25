import React from 'react'
import {StaticRouter} from 'react-router-dom'
import App from './App'

export default (location,context)=>(
	<StaticRouter location={location} context={context}>
		<App />
	</StaticRouter>
)

