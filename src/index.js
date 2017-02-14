import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import store from './store'
import { Provider } from 'react-redux'
import { Router, Route,browserHistory} from 'react-router'

const App=()=>(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='*' component={Main} />
		</Router>
	</Provider>
)

ReactDOM.render(<App />,document.getElementById('root'))
