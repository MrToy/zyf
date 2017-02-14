import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import store from './store'
import { Provider } from 'react-redux'
import {RouterContext,Router, Route,browserHistory} from 'react-router'


export const routes=(
	<Route path='*' component={Main} />
)

const App=()=>(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>
)

if(__BROWSER__){
	ReactDOM.render(<App />,document.getElementById('root'))
}

export default props=>(
	<Provider store={store}>
		<RouterContext {...props}/>
	</Provider>
)