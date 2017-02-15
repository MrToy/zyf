import React from 'react'
import ReactDOM from 'react-dom'
import {Router,browserHistory} from 'react-router'
import Box from './Box'
import routes from './routes'

export const App=()=>(
	<Box>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Box>
)

ReactDOM.render(<App />,document.getElementById('root'))