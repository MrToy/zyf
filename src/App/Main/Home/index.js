import React from 'react'
import style from './index.styl'
import Titlebar from 'lib/Titlebar'
import Carouse from 'lib/Carouse'
import * as articles from 'lib/store/articles'
import {connect} from 'react-redux'
import moment from 'moment'

moment.locale('zh-cn')

const Infos=()=>(
	<div className={style.infos}>
		<div className={style.center}>
			<img src={require('./p5.png')} />
			<p>
				火锅是餐饮剧场里最热辣的舞蹈表演，<br/>
				它与热情而耿直的重庆性格达到了天人合一的境界，<br/>
				重庆人孕育的70年火锅文化引来无数食客的追捧和衷情，<br/>
				而今，度过近百年一起沸腾的岁月后，推陈出新愈显重要。<br/>
				为了满足现代人对饮食健康营养之需求，<br/>
				周子兴先生遍访各地调味大师、营养名师，<br/>
				潜心数年刻苦钻研，终于研制出口味独特、营养丰富，<br/>
				辣而不燥、久食不上火的双味鱼火锅，<br/>
				为火锅文化注入全新元素，在重庆餐饮界掀起一场双味鱼风潮，<br/>
				成就了饮食界里另一段美味传奇。<br/>
			</p>
			<video src="//toy-static.oss-cn-shanghai.aliyuncs.com/mv.mp4" controls></video>
		</div>
	</div>
)

@connect(({articles})=>({data:articles.tops}))
class News extends React.Component{
	componentDidMount(){
		this.props.dispatch(articles.getTops())
	}
	render(){
		var data=this.props.data
		return (
			<div className={style.news}>
				<div className={style.center}>
					<div className={style.panel}>
						<Titlebar title="最新动态" info="COMPANY NEWS" link="/news" />
						{data&&Object.keys(data).reverse().map(id=>(
							<p key={id}>
								{data[id].title}
								<span className={style.date}>{moment(data[id].date).fromNow()}</span>
							</p>
						))}
					</div>
					<img className={style.img} src={require('./skill.jpg')} />
				</div>
				<div className={style.bottom}>
					<img src={require('./p8.png')} />
				</div>
			</div>
		)
	}
}
// const News=()=>(
// 	<div className={style.news}>
// 		<div className={style.center}>
// 			<div className={style.panel}>
// 				<Titlebar title="最新动态" info="COMPANY NEWS" link="/" />
// 			</div>
// 			<img className={style.img} src={require('./skill.jpg')} />
// 		</div>
// 		<div className={style.bottom}>
// 			<img src={require('./p8.png')} />
// 		</div>
// 	</div>
// )

export default ()=>(
	<div>
		<Carouse />
		<Infos />
		<News />
	</div>
)