import React from 'react'
import {Switch,Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.styl'


injectTapEventPlugin()


export default class extends React.Component{
	render(){
		return (
				<MuiThemeProvider>
					<Switch>
						<Route path='/admin' component={require('ssr-loader!./Admin')} />
						<Route path='/' component={require('ssr-loader!./Main')} />
					</Switch>
				</MuiThemeProvider>
		)
	}
}
