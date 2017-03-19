import React from 'react'
import {TextField,Toolbar,RaisedButton} from 'material-ui'
import style from '../index.styl'
import * as articles from 'lib/store/articles'
import {connect} from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

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
								<RaisedButton label="添加" onClick={()=>articles.add({title:"test",date:new Date()})} />
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
								<TableRowColumn>{data[id].date}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		)
	}
}
