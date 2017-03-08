import React from 'react'
import style from './index.styl'
import {Link,Switch,Route,Redirect} from 'react-router-dom'


const MyLink = ({to,children})=>(
	<Route path={to} children={({match})=>(
		<Link className={match&&style.active} to={to}>{children}</Link>
	)}/>
)

export default ({match,data})=>(
	<div className={style.box}>
		<div className={style.center}>
			<div className={style.left}>
				{data.map((it,i)=>(
					<MyLink to={`${match.url}/${it.to}`} key={i}>{it.text}</MyLink>
				))}
				<img src={require('./p11.png')} />
			</div>
			<div className={style.right}>
				<Switch>
					{data.map((it,i)=>(
						<Route path={`${match.url}/${it.to}`} key={i} component={it.component} />
					))}
					{data[0]&&<Redirect to={`${match.url}/${data[0].to}`} />}
				</Switch>
			</div>
		</div>
	</div>
)