import React from 'react'
import Carouse from '../../../Carouse'
import MenuBox from '../../../MenuBox'
import Titlebar from '../../../Titlebar'
import ArticleList from '../../../ArticleList'


const data=[
	{to:'center',text:'新闻中心',component:()=>(
		<div>
			<Titlebar title="新闻中心" info="News Center" />
			<ArticleList pagination />
		</div>
	)},
	{to:'state',text:'加盟动态',component:()=>(
		<div>
			<Titlebar title="加盟动态" info="Join state" />
			<ArticleList pagination />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)
