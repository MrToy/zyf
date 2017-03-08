import React from 'react'
import style from './index.styl'
import cx from 'classnames'

const imgs=[
	require('./c1.jpg'),
	require('./c2.jpg'),
	require('./c3.jpg'),
	require('./c4.jpg'),
	require('./c5.jpg'),
]

export default class Carouse extends React.Component{
	state={index:0}
	componentDidMount(){
		this.timer=setInterval(()=>{
			let next=this.state.index+1
			if(next>imgs.length-1)next=0
			this.setState({index:next})
		},3000)
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	render(){
		return (
			<div className={style.carouse}>
				{imgs.map((it,i)=>(
					<img className={cx(style.item,{[style.active]:this.state.index==i})} key={i} src={it}  />
				))}
				<div className={style.dots}>
					{imgs.map((it,i)=>(
						<i className={cx(style.dot,{[style.active]:this.state.index==i})} key={i} />
					))}
				</div>
			</div>
		)
	}
}