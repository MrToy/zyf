import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.styl'
import user from '../store/user'


injectTapEventPlugin()

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    user.state.admin ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default class extends React.Component{
	render(){
		return (
				<MuiThemeProvider>
					<Switch>
						<PrivateRoute path='/admin' component={require('ssr-loader!./Admin')} />
						<Route path='/' component={require('ssr-loader!./Main')} />
					</Switch>
				</MuiThemeProvider>
		)
	}
}
