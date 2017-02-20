import React from 'react'
//import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store'
import AsyncRoute from '../AsyncRoute'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.styl'


const App=()=>(
	<Provider store={store}>
		<MuiThemeProvider>
			<div>
				<AsyncRoute exact path='/' render={import('../Main')} />
				<AsyncRoute exact path='/admin' render={import('../Admin')} />
			</div>
		</MuiThemeProvider>
	</Provider>
)

export default App