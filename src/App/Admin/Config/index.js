import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import {notify} from 'MyStore/config'

export default ()=>(
	<div>
		<TextField floatingLabelText="公司地址" className={style.input} /><br />
		<RaisedButton label="保存" onClick={()=>notify({title: 'Welcome',status: 'success'})} /><br/>
	</div>
)