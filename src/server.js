import React from 'react'
import {RouterContext} from 'react-router'
import {Provider} from 'react-redux'
import store from './store'


export routes from './routes'

export const Box=props=>(
	<Provider store={store}>
		<RouterContext {...props}/>
	</Provider>
)