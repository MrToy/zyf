import React from 'react'
import Carouse from 'lib/Carouse'
import MenuBox from 'lib/MenuBox'
import Titlebar from 'lib/Titlebar'

const data=[
	{to:'process',text:'技术培训',component:()=>(
		<div>
			<Titlebar title="技术培训" info="The skill process" />
			<img src={require('./a1.jpg')} />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)