import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import * as config from '../../../store/config'
import {connect} from 'react-redux'


export default connect(({config})=>({data:config}))(({data})=>(
	<div>
		<TextField floatingLabelText="公司地址" className={style.input} value={data.address||""} onChange={(e,val)=>config.set("address",val)} /><br />
		<TextField floatingLabelText="加盟热线" className={style.input} value={data.tel1||""} onChange={(e,val)=>config.set("tel1",val)} /><br />
		<TextField floatingLabelText="服务热线" className={style.input} value={data.tel2||""} onChange={(e,val)=>config.set("tel2",val)} /><br />
		<TextField floatingLabelText="传真" className={style.input} value={data.fox||""} onChange={(e,val)=>config.set("fox",val)} /><br />
		<TextField floatingLabelText="网址" className={style.input} value={data.site||""} onChange={(e,val)=>config.set("site",val)} /><br />
		<TextField floatingLabelText="E－mail" className={style.input} value={data.mail||""} onChange={(e,val)=>config.set("mail",val)} /><br />
	</div>
))
