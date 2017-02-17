import React from 'react'
import {Route,IndexRoute} from 'react-router'
import Box from './Box'


const wait=promise=>(state,cb)=>promise.then(component=>cb(null,component.default))

export default (
	<Route path='/' component={Box}>
		<IndexRoute getComponent={wait(import('./Main'))} />
	</Route>
)

