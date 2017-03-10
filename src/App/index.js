import React from 'react'
import {Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from 'MyStore'
import AsyncRoute from 'AsyncRoute'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.styl'

injectTapEventPlugin()

export default ()=>(
	<Provider store={store}>
		<MuiThemeProvider>
			<Switch>
				<AsyncRoute path='/admin' render={import('./Admin')} />
				<AsyncRoute path='/' render={import('./Main')} />
			</Switch>
		</MuiThemeProvider>
	</Provider>
)

