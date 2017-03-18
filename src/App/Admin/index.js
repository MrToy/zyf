import React, { Component } from 'react'
import {AppBar,IconButton} from 'material-ui'
import {ActionHome,ActionBuild,AvFiberNew} from 'material-ui/svg-icons'
import style from './index.styl'
import {Link,Switch,Route,Redirect} from 'react-router-dom'
import AsyncRoute from 'lib/AsyncRoute'
import cx from 'classnames'
//import {connect} from 'react-redux'
// import * as configActions from '../store/config'
// import * as userActions from '../store/user'


const MenuLink=({to,Icon,children})=>(
	<Route path={to} children={({match})=>(
		<Link className={cx(style.menuLink,{[style.active]:match})} to={to}><Icon /><span>{children}</span></Link>
	)} />
)

//@connect(({config,user})=>({config,user}))
export default ({match})=>(
	<div>
		<AppBar title="内容管理" style={{backgroundColor:"#b81c25"}} iconElementLeft={
			<Link to="/">
				<IconButton><ActionHome color="#fff" /></IconButton>
			</Link>
		} />
		<div className={style.box}>
			<div className={style.left}>
				<MenuLink to={`${match.url}/config`} Icon={ActionBuild}>常规设置</MenuLink>
				<MenuLink to={`${match.url}/news`} Icon={AvFiberNew}>新闻管理</MenuLink>
			</div>
			<div className={style.right}>
				<Switch>
					<AsyncRoute path={`${match.url}/config`} render={import('./Config')} />
					<Route path={`${match.url}/news`}  />
					<Redirect to={`${match.url}/config`} />
				</Switch>
			</div>
		</div>
	</div>
)