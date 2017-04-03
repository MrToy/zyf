import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import * as config from '../../../store/config'
import {connect} from 'react-redux'
//
//
// export default connect(({config})=>({data:config}))(({data})=>(
// 	<div>
// 		<TextField floatingLabelText="公司地址" className={style.input} value={data.address||""} onChange={(e,val)=>config.set("address",val)} /><br />
// 		<TextField floatingLabelText="加盟热线" className={style.input} value={data.tel1||""} onChange={(e,val)=>config.set("tel1",val)} /><br />
// 		<TextField floatingLabelText="服务热线" className={style.input} value={data.tel2||""} onChange={(e,val)=>config.set("tel2",val)} /><br />
// 		<TextField floatingLabelText="传真" className={style.input} value={data.fox||""} onChange={(e,val)=>config.set("fox",val)} /><br />
// 		<TextField floatingLabelText="网址" className={style.input} value={data.site||""} onChange={(e,val)=>config.set("site",val)} /><br />
// 		<TextField floatingLabelText="E－mail" className={style.input} value={data.mail||""} onChange={(e,val)=>config.set("mail",val)} /><br /><br />
// 		<RaisedButton onClick={()=>{}} label="保存" /><br/>
// 	</div>
// ))

@connect(({config})=>({data:config}))
export default class extends React.Component{
	state={}
	componentDidMount(){
		this.setState(this.props.data)
	}
	async set(){
		await config.set(this.state)
		alert("保存成功")
		this.props.dispatch(config.get())
	}
	render(){
		var data=this.state
		return (
			<div>
				<TextField floatingLabelText="公司地址" className={style.input} value={data.address||""} onChange={(e,val)=>this.setState({address:val})} /><br />
				<TextField floatingLabelText="加盟热线" className={style.input} value={data.tel1||""} onChange={(e,val)=>this.setState({tel1:val})} /><br />
				<TextField floatingLabelText="服务热线" className={style.input} value={data.tel2||""} onChange={(e,val)=>this.setState({tel2:val})} /><br />
				<TextField floatingLabelText="传真" className={style.input} value={data.fox||""} onChange={(e,val)=>this.setState({fox:val})} /><br />
				<TextField floatingLabelText="网址" className={style.input} value={data.site||""} onChange={(e,val)=>this.setState({site:val})} /><br />
				<TextField floatingLabelText="E－mail" className={style.input} value={data.mail||""} onChange={(e,val)=>this.setState({mail:val})} /><br /><br />
				<RaisedButton onClick={()=>::this.set()} label="保存" /><br/>
			</div>
		)
	}
}
