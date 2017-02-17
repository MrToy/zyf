import React from 'react'
import {RouterContext} from 'react-router'
export routes from './routes'

export const App=props=>(
	<RouterContext {...props}/>
)