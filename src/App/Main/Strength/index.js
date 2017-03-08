import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'

const data=[
	{to:'process',text:'餐饮前景',component:()=>(
		<div>
			<Titlebar title="餐饮前景" info="Good at the process" />
			<img src={require('./a1.jpg')} />
		</div>
	)},
	{to:'strength',text:'品牌优势',component:()=>(
		<div>
			<Titlebar title="品牌优势" info="Good at the strength" />
			<img src={require('./a2.jpg')} />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)