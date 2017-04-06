import React, { Component } from 'react'
import {AppBar,IconButton} from 'material-ui'
import {ActionHome,ActionBuild,AvFiberNew,CommunicationTextsms} from 'material-ui/svg-icons'
import style from './index.styl'
import {Link,Switch,Route,Redirect} from 'react-router-dom'
import cx from 'classnames'
import user from '../../store/user'

const MenuLink=({to,Icon,children})=>(
	<Route path={to} children={({match})=>(
		<Link className={cx(style.menuLink,{[style.active]:match})} to={to}><Icon /><span>{children}</span></Link>
	)} />
)


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
				<MenuLink to={`${match.url}/message`} Icon={CommunicationTextsms}>留言板</MenuLink>
			</div>
			<div className={style.right}>
				<Switch>
					<Route path={`${match.url}/config`} component={require('ssr-loader!./Config')} />
					<Route path={`${match.url}/news`} component={require('ssr-loader!./Articles')} />
					<Redirect to={`${match.url}/config`} />
				</Switch>
			</div>
		</div>
	</div>
)
