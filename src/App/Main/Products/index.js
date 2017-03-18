import React from 'react'
import Carouse from 'lib/Carouse'
import style from './index.styl'
import {Link,Switch,Route} from 'react-router-dom'


const List=({match})=>(
	<div>
		<img src={require('./a1.png')} />
		<img className={style.full} src={require('./a2.jpg')} />
		<img className={style.radius} src={require('./a3.jpg')} />
		<img className={style.radius} src={require('./a4.jpg')} />
		<img className={style.radius} src={require('./a5.jpg')} />
		<img className={style.radius} src={require('./a6.jpg')} />
		<p>周渔府自有万亩花椒基地、辣椒基地，所有原料经人工精选后，将60余中天然食材，配已独门配方，已现代工艺生产而成 全程多达20余项检测程序，确保口味的正宗与质量统一</p>
		<div className={style.map}>
			<Link to={`${match.url}/0`} />
			<Link to={`${match.url}/1`} />
			<Link to={`${match.url}/2`} />
			<Link to={`${match.url}/3`} />
			<Link to={`${match.url}/4`} />
			<img className={style.full} src={require('./a7.jpg')} />
		</div>
		<img className={style.full} src={require('./a8.jpg')} />
		<img className={style.full} src={require('./a9.jpg')} />
		<img className={style.full} src={require('./a10.jpg')} />
		<img className={style.full} src={require('./a11.jpg')} />
	</div>
)

const ProductsImages=[
	require('./w1.png'),
	require('./w2.png'),
	require('./w3.png'),
	require('./w4.png'),
	require('./w5.png'),
]


const Products=({match})=>(
	<div className={style.imgs}>
		<img src={ProductsImages[match.params.id]} />
		<img src={require('./b1.png')} />
		<img src={require('./b2.png')} />
		<img src={require('./b3.png')} />
		<img src={require('./b4.png')} />
		<img src={require('./b5.png')} />
		<img src={require('./b6.png')} />
		<img src={require('./b7.png')} />
	</div>
)



export default ({match})=>(
	<div>
		<Carouse />
		<div className={style.box}>
			<div className={style.center}>
				<Switch>
					<Route exact path={match.url} component={List} />
					<Route path={`${match.url}/:id`} component={Products} />
				</Switch>
			</div>
		</div>
	</div>
)