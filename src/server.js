import React from 'react'
import {RouterContext} from 'react-router'
import Box from './Box'

export routes from './routes'

export const App=props=>(
	<Box>
		<RouterContext {...props}/>
	</Box>
)