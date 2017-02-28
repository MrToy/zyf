import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as configActions from '../../store/config'
import * as userActions from '../../store/user'
import style from './index.styl'


const Header=()=>(
	<div className={style.header}>
		<img className={style.logo} src={require("./logo.png")} />
		<img className={style.text} src={require("./p33.png")} />
	</div>
)

const NavBar=()=>(
	<div className={style.nav}>
		<ul>
			<li><Link to="/">首页</Link></li>
			<li><Link to="/about">企业基因</Link></li>
			<li><Link to="/join">加盟解读</Link></li>
			<li><Link to="/strength">品牌优势</Link></li>
			<li><Link to="/foods">美食天地</Link></li>
			<li><Link to="/news">新闻中心</Link></li>
			<li><Link to="/products">产品商城</Link></li>
			<li><Link to="/skills">技术培训</Link></li>
			<li><Link to="/shops">店面展示</Link></li>
			<li><Link to="/contact">联系我们</Link></li>
		</ul>
	</div>
)


export default (props)=>(
	<div>
		<Header />
		<NavBar />
	</div>
)