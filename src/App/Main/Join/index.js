import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'

const data=[
	{to:'process',text:'加盟流程',component:()=>(
		<div>
			<Titlebar title="加盟流程" info="Process for join" />
			<img src={require('./a1.jpg')} />
		</div>
	)},
	{to:'support',text:'加盟支持',component:()=>(
		<div>
			<Titlebar title="加盟支持" info="Support for join" />
			<img src={require('./a2.jpg')} />
		</div>
	)},
	{to:'analysis',text:'投资分析',component:()=>(
		<div>
			<Titlebar title="投资分析" info="Invest analysis" />
			<img src={require('./a3.jpg')} />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)
