import React from 'react'
import {StaticRouter} from 'react-router-dom'
import Box from './Box'

const router=(location,context)=>(
	<StaticRouter location={location} context={context}>
		<Box />
    </StaticRouter>
)

export default router