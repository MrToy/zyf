import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import * as articles from 'lib/store/articles'
import {connect} from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import moment from 'moment'
import {NavigationArrowBack,NavigationArrowForward} from 'material-ui/svg-icons'

moment.locale('zh-cn')

@connect(({articles})=>({data:articles.lists}))
export default class extends React.Component{
	componentDidMount(){
		this.props.dispatch(articles.getLists())
	}
	render(){
		var data=this.props.data
		return(
			<div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn colSpan="3">
								<RaisedButton className={style.button} label="添加" onClick={()=>articles.add({title:"test",date:new Date()})} />
								<RaisedButton className={style.button} icon={<NavigationArrowBack />} />
								<RaisedButton className={style.button} icon={<NavigationArrowForward />} />
								<RaisedButton className={style.button} backgroundColor="#DB2828" labelColor="#fff" label="删除" disabled />
							</TableHeaderColumn>
						</TableRow>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>标题</TableHeaderColumn>
							<TableHeaderColumn>日期</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data&&Object.keys(data).reverse().map(id=>(
							<TableRow key={id}>
								<TableRowColumn>{id}</TableRowColumn>
								<TableRowColumn>{data[id].title}</TableRowColumn>
								<TableRowColumn>{moment(data[id].date).format('LLL')}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		)
	}
}
