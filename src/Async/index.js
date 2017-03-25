import React from 'react'
import {CircularProgress} from 'material-ui'
// export default class AsyncRoute extends React.Component{
// 	state={component:null}
// 	componentDidMount(){
// 		console.log(0)
// 		this.props.component().then(data=>{ 
// 			this.setState({component:data.default}) 
// 		})
// 	}
// 	render(){
// 		var Component=this.state.component
// 		var props=this.props
// 		if(!Component){
// 			return this.props.loading||<CircularProgress />
// 		}else{
// 			return <Component {...props} />
// 		}
// 	}
// }
export default getComponent=>{
	return class AsyncComponent extends React.Component {
		mounted = false
		state = {
			Component:null
		}
		componentWillMount() {
			if ( this.state.Component === null ) {
				return getComponent().then(m => m.default).then(Component => {
					if ( this.mounted ) {
						this.setState({Component});
					}
				})
			}
		}
		componentDidMount() {
			this.mounted = true;
		}
		componentWillUnmount() {
			this.mounted = false;
		}
		render() {
			const {Component} = this.state;
			if ( Component !== null ) {
				return <Component {...this.props} />
			}
			return this.props.loading||<CircularProgress />
		}
	}
}