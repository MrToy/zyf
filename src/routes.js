import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import { Provider } from 'react-redux'
import {RouterContext,Router, Route,browserHistory} from 'react-router'


const routes=(
	<Route path='*' component={Main} />
)

export default routes