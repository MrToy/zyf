import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as config from '../store/config'
import style from './index.styl'

@connect(({config})=>({config}))
export default class Main extends Component {
	render() {
		return (
			<div className={style.box}>
				<h2>{JSON.stringify(this.props.config)}</h2>
				<p>233xxx</p>
				<button onClick={()=>config.change()}>click me</button>
			</div>
		)
	}
}