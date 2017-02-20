import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as configActions from '../store/config'
import * as userActions from '../store/user'
import style from './index.styl'


const Header=()=>(
	<div className={style.header}>
		<img src={require("./logo.png")} />
	</div>
)

@connect(({config,user})=>({config,user}))
export default class extends Component {
	render() {
		var {config,user}=this.props
		return (
			<div className={style.box}>
				<Header />
				<h2>{JSON.stringify({config,user})}</h2>
				<p>233xx</p>
				<button onClick={()=>configActions.change()}>click me</button>
				<button onClick={()=>userActions.change("x")}>click me</button>
			</div>
		)
	}
}