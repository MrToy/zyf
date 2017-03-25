import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from 'lib/store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.styl'


injectTapEventPlugin()



export default ()=>(
	<Provider store={store}>
		<MuiThemeProvider>
			<Switch>
				<Route path='/admin' component={require('ssr-loader!./Admin')} />
				<Route path='/' component={require('ssr-loader!./Main')} />
			</Switch>
		</MuiThemeProvider>
	</Provider>
)

