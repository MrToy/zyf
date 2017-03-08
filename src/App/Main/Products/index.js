import React from 'react'
import Carouse from 'Carouse'
import style from './index.styl'


export default ()=>(
	<div>
		<Carouse />
		<div className={style.box}>
			<div className={style.center}>
				<img src={require('./a1.png')} />
				<img className={style.full} src={require('./a2.jpg')} />
				<img className={style.radius} src={require('./a3.jpg')} />
				<img className={style.radius} src={require('./a4.jpg')} />
				<img className={style.radius} src={require('./a5.jpg')} />
				<img className={style.radius} src={require('./a6.jpg')} />
				<p>周渔府自有万亩花椒基地、辣椒基地，所有原料经人工精选后，将60余中天然食材，配已独门配方，已现代工艺生产而成 全程多达20余项检测程序，确保口味的正宗与质量统一</p>
				<img className={style.full} src={require('./a7.jpg')} />
				<img className={style.full} src={require('./a8.jpg')} />
				<img className={style.full} src={require('./a9.jpg')} />
				<img className={style.full} src={require('./a10.jpg')} />
				<img className={style.full} src={require('./a11.jpg')} />
			</div>
		</div>
	</div>
)