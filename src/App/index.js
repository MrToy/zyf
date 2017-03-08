import React from 'react'
import {Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from 'MyStore'
import AsyncRoute from 'AsyncRoute'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.styl'


export default ()=>(
	<Provider store={store}>
		<MuiThemeProvider>
			<Switch>
				<AsyncRoute exact path='/' render={import('./Main')} />
				<AsyncRoute path='/admin' render={import('./Admin')} />
			</Switch>
		</MuiThemeProvider>
	</Provider>
)

