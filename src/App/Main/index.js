import React from 'react'
import {connect} from 'react-redux'
import {Link,Switch,Route} from 'react-router-dom'
import style from './index.styl'

const Header=connect(({config})=>({config}))(({config})=>(
	<div className={style.header}>
		<img className={style.logo} src={require("./logo.png")} />
		<div className={style.text} title="tel">
			<img src={require("./p33.png")} />
			<span>{config.tel1}</span>
		</div>
	</div>
))

const NavBar=()=>(
	<div className={style.nav}>
		<div className={style.center}>
			<Link to="/">首页</Link>
			<Link to="/about">企业基因</Link>
			<Link to="/join">加盟解读</Link>
			<Link to="/strength">品牌优势</Link>
			<Link to="/foods">美食天地</Link>
			<Link to="/news">新闻中心</Link>
			<Link to="/products">产品商城</Link>
			<Link to="/skills">技术培训</Link>
			<Link to="/shops">店面展示</Link>
			<Link to="/contact">联系我们</Link>
		</div>
	</div>
)

const Links=()=>{
	const data=[
		{src:"http://www.cqcysh.com/",text:"重庆餐饮商会"},
		{src:"http://www.cqhgw.cn/",text:"重庆市火锅协会"},
		{src:"http://18.sj998.com/31760/",text:"商界招商网"},
		{src:"http://www.cyin.com.cn/",text:"中国餐饮网"},
		{src:"http://www.22cn.net/",text:"中国餐饮加盟"},
		{src:"http://www.dianping.com/",text:"大众点评"},
		{src:"http://www.jiameng.com/zhouyufu/vip.htm",text:"全球加盟网"},
	]
	return (
		<div className={style.links}>
			{data.map(it=>(
				<a href={it.src} key={it.src} target="_blank">{it.text}</a>
			))}
			<Link to="/admin">后台管理</Link>
		</div>
	)
}

// @connect()
// class Footer extends React.Component{
// 	render(){
// 		console.log(this.props)
// 		return(
// 			<div className={style.footer}>
// 				<div className={style.center}>
// 					<img className={style.qrcode} src={require('./qrcode.png')} />
// 					<div className={style.text}>
// 						周渔府微信公众号正式开通了<br/>
// 						欢迎新老朋友在微信平台中订阅<br/>
// 						订阅号：重庆周渔府<br/>
// 						二维码：（用手机直接扫描）<br/>
// 					</div>
// 					<div className={style.line}></div>
// 					<div className={style.text}>
// 						重庆周渔府餐饮文化有限公司<br/>
// 						公司地址：重庆市九龙坡区谢家湾正街55号华润广场B座1908室（万象城旁）<br/>
// 						加盟热线：023－68824366 13638328738<br/>
// 						服务热线：023－68825366 传真：68823366转700<br/>
// 						网址：www.zhouyufu.com <br/>
// 						E－mail：zyf62212@163.com<br/>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

const Footer=connect(({config})=>({config}))(({config})=>(
	<div className={style.footer}>
		<div className={style.center}>
			<img className={style.qrcode} src={require('./qrcode.png')} />
			<div className={style.text}>
				周渔府微信公众号正式开通了<br/>
				欢迎新老朋友在微信平台中订阅<br/>
				订阅号：重庆周渔府<br/>
				二维码：（用手机直接扫描）<br/>
			</div>
			<div className={style.line}></div>
			<div className={style.text}>
				重庆周渔府餐饮文化有限公司<br/>
				公司地址：{config.address}<br/>
				加盟热线：{config.tel1}<br/>
				服务热线：{config.tel2} 传真：{config.fox}<br/>
				网址：{config.site} <br/>
				E－mail：{config.mail}<br/>
			</div>
		</div>
	</div>
))

export default ()=>(
	<div>
		<Header />
		<NavBar />
		<div className={style.content}>
			<Switch>
				<Route exact path='/' component={require('ssr-loader!./Home')} />
				<Route path='/about' component={require('ssr-loader!./About')} />
				<Route path='/join' component={require('ssr-loader!./Join')} />
				<Route path='/strength' component={require('ssr-loader!./Strength')} />
				<Route path='/foods' component={require('ssr-loader!./Foods')} />
				<Route path='/news' component={require('ssr-loader!./News')} />
				<Route path='/products' component={require('ssr-loader!./Products')} />
				<Route path='/skills' component={require('ssr-loader!./Skills')} />
				<Route path='/shops' component={require('ssr-loader!./Shops')} />
				<Route path='/contact' component={require('ssr-loader!./Contact')} />
				<Route component={require('lib/NotFound').default} />
			</Switch>
		</div>
		<Links />
		<Footer />
	</div>
)