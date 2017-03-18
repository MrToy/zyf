import React from 'react'
import Carouse from 'lib/Carouse'
import style from './index.styl'


export default ()=>(
	<div>
		<Carouse />
		<div className={style.box}>
			<div className={style.center}>
				<img src={require('./a1.png')} />
			</div>
		</div>
	</div>
)