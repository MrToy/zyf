import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import * as articles from 'lib/store/articles'
import {connect} from 'react-redux'


export default connect(({articles})=>({data:articles}))(({data})=>(
	<div>
		<RaisedButton label="添加" onClick={()=>articles.add({title:"test",date:new Date()})} />
	</div>
))
