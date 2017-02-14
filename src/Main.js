import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActions} from './store'
import {changeUser} from './store/user'

@connect(store=>({store}),bindActions({changeUser}))
export default class Main extends Component {
	render() {
		var {store}=this.props
		return (
			<div className="App">
				<h2>{JSON.stringify(store)}</h2>
				<h2>{this.props.name}</h2>
				<p>233x</p>
				<button onClick={()=>this.props.changeUser()}>click me</button>
			</div>
		);
	}
}