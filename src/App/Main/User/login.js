import React from 'react'
import Carouse from '../../../Carouse'
import style from './index.styl'
import {TextField,RaisedButton} from 'material-ui'
import user from '../../../store/user'
import {Redirect} from 'react-router-dom'

export default class extends React.Component{
  state={name:"",pass:"",isLogin:false}
  login(){
    user
      .login(this.state.name,this.state.pass)
      .then(()=>{
        alert("登录成功")
        this.setState({isLogin:true})
      })
      .catch(err=>alert("用户名或密码错误"))
  }
  render(){
    return this.state.isLogin?(
      <Redirect to={this.props.location.state.from||'/'}/>
    ):(
    	<div className={style.box}>
        <h1>登录</h1>
    		<TextField floatingLabelText="用户名" value={this.state.name} onChange={(e,val)=>this.setState({name:val})}  /><br/>
        <TextField floatingLabelText="密码" value={this.state.pass} onChange={(e,val)=>this.setState({pass:val})} /><br/><br/>
        <RaisedButton label="确定" onClick={::this.login} /><br/>
    	</div>
    )
  }
}
