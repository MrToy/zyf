import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'

const Story=()=>(
	<div>
		<Titlebar title="品牌故事" info="Brand story" />
		<img src={require('./a1.jpg')} />
	</div>
)
const Honor=()=>(
	<div>
		<Titlebar title="品牌荣誉" info="Brand reputation" />
		<img src={require('./a2.jpg')} />
	</div>
)
const Power=()=>(
	<div>
		<Titlebar title="品牌实力" info="Brand strength" />
		<img src={require('./a3.jpg')} />
		<img style={{width:"100%"}} src={require('./a4.jpg')} />
		<img style={{width:"100%"}} src={require('./a5.jpg')} />
	</div>
)

const data=[
	{to:'story',text:'品牌故事',component:Story},
	{to:'honor',text:'品牌荣誉',component:Honor},
	{to:'power',text:'品牌实力',component:Power},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)
