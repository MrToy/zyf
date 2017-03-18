import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import {set as setConfig} from 'lib/store/config'
import {connect} from 'react-redux'


@connect(({config})=>({config}))
export default class extends React.Component{
	state={}
	componentDidMount(){
		this.setState(this.props.config)
	}
	render(){
		var {address="",tel1="",tel2="",site="",mail="",fox=""}=this.state
		return (
			<div>
				<TextField floatingLabelText="公司地址" className={style.input} value={address} onChange={(e,val)=>this.setState({address:val})} /><br />
				<TextField floatingLabelText="加盟热线" className={style.input} value={tel1} onChange={(e,val)=>this.setState({tel1:val})} /><br />
				<TextField floatingLabelText="服务热线" className={style.input} value={tel2} onChange={(e,val)=>this.setState({tel2:val})} /><br />
				<TextField floatingLabelText="传真" className={style.input} value={fox} onChange={(e,val)=>this.setState({fox:val})} /><br />
				<TextField floatingLabelText="网址" className={style.input} value={site} onChange={(e,val)=>this.setState({site:val})} /><br />
				<TextField floatingLabelText="E－mail" className={style.input} value={mail} onChange={(e,val)=>this.setState({mail:val})} /><br />
				<div className={style.buttons}>
					<RaisedButton label="保存" onClick={()=>setConfig(this.state)} />
				</div>
			</div>
		)
	}
}