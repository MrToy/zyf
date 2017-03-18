import React from 'react'
import Carouse from 'lib/Carouse'
import MenuBox from 'lib/MenuBox'
import Titlebar from 'lib/Titlebar'

const data=[
	{to:'center',text:'新闻中心',component:()=>(
		<div>
			<Titlebar title="新闻中心" info="News Center" />
		</div>
	)},
	{to:'state',text:'加盟动态',component:()=>(
		<div>
			<Titlebar title="加盟动态" info="Join state" />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)