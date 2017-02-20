import React from 'react'
import {Route} from 'react-router-dom'
import {CircularProgress} from 'material-ui'
export default class AsyncRoute extends React.Component{
	state={component:null}
	render(){
		let Component=this.state.component
		return (
			<Route {...this.props} render={props=>{
				if(!Component){
					this.props.render.then(data=>{
						this.setState({component:data.default})
					})
					return this.props.loading||<CircularProgress />
				}else{
					return <Component {...props} />
				}
			}}/>
		)
	}
}