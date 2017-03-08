import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'

const Story=()=>(
	<div>
		<Titlebar title="品牌故事" info="Brand story" />
	</div>
)
const Honor=()=>(
	<div>
		233
	</div>
)
const Power=()=>(
	<div>
		233
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
