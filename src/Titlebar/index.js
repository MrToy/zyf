import React from 'react'
import style from './index.styl'

export default (props)=>(
	<div className={style.box}>
		<img src={require('./p7.png')} />
		<div className={style.text}>
			<div className={style.title}>{props.title}</div>
			<div className={style.info}>{props.info}</div>
		</div>
		{props.link&&<a href={props.link}>more</a>}
	</div>
)