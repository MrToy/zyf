import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import * as articles from 'lib/store/articles'
import {connect} from 'react-redux'


@connect(({articles})=>({articles}))
export default class extends React.Component{
	state={}
	componentDidMount(){
		this.setState(this.props.config)
	}
	render(){
		var {address="",tel1="",tel2="",site="",mail="",fox=""}=this.state
		return (
			<div>
				<div className={style.buttons}>
					<RaisedButton label="测试" onClick={()=>articles.add({title:"233"})} />
				</div>
			</div>
		)
	}
}