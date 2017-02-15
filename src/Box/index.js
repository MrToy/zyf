import React from 'react'
import store from '../store'
import {Provider} from 'react-redux'
import './index.styl'

const Box=props=>(
	<Provider store={store}>
		{props.children}
	</Provider>
)

export default Box