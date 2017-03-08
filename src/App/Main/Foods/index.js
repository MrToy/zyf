import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'


const FoodImage=()=>(
	<div></div>
)


const data=[
	{to:'classics',text:'经典火锅',component:()=>(
		<div>
			<Titlebar title="经典火锅" info="Classics hot pot" />
		</div>
	)},
	{to:'cold',text:'特色冷锅',component:()=>(
		<div>
			<Titlebar title="特色冷锅" info="Classics cold pot" />
		</div>
	)},
	{to:'vegetable',text:'美食菜品',component:()=>(
		<div>
			<Titlebar title="美食菜品" info="Dish type" />
		</div>
	)},
	{to:'dry',text:'特色干锅',component:()=>(
		<div>
			<Titlebar title="特色干锅" info="Classics dry pot" />
		</div>
	)},
	{to:'dish',text:'自助味碟',component:()=>(
		<div>
			<Titlebar title="自助味碟" info="Self-service dish" />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)