import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'
import style from './index.styl'

const data=[
	{to:'us',text:'联系我们',component:()=>(
		<div className={style.box}>
			<Titlebar title="联系我们" info="Contact us" />
			<h4>重庆周渔府餐饮文化有限公司</h4>
			<p>
				公司地址：重庆市九龙坡区谢家湾正街55号华润广场B座1908室（万象城旁）<br/>
				加盟热线：023-68824366 68825366<br/>
				总 机：023-68823366<br/>
				分 机：<br/>
				<span className={style.indent}>
					前 台：701、702<br/>
					加盟部：707、777<br/>
					营建部：711<br/>
					营运部：706<br/>
					人事部：706<br/>
					培训部：708<br/>
					厨政部：709、710<br/>
					财务部：788<br/>
					传 真：700<br/>
				</span>
				网 址： http://www.zhouyufu.com<br/>
				Email :zyf62212@163.com<br/>
			</p>
			<iframe src={require('file-loader!./map.html')+'?center=106.525276%2C29.520353&zoom=19&width=558&height=360&markers=106.525276%2C29.520353&markerStyles=l%2CA'} frameBorder="0" style={{width:560,height:362}}></iframe>
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)