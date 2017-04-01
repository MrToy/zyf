import React from 'react'
import Carouse from '../../../Carouse'
import MenuBox from '../../../MenuBox'
import Titlebar from '../../../Titlebar'


const data=[
	{to:'story',text:'品牌故事',component:()=>(
		<div>
			<Titlebar title="品牌故事" info="Brand story" />
			<img src={require('./a1.jpg')} />
		</div>
	)},
	{to:'honor',text:'品牌荣誉',component:()=>(
		<div>
			<Titlebar title="品牌荣誉" info="Brand reputation" />
			<img src={require('./a2.jpg')} />
		</div>
	)},
	{to:'power',text:'品牌实力',component:()=>(
		<div>
			<Titlebar title="品牌实力" info="Brand strength" />
			<img src={require('./a3.jpg')} />
			<img style={{width:"100%"}} src={require('./a4.jpg')} />
			<img style={{width:"100%"}} src={require('./a5.jpg')} />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)
