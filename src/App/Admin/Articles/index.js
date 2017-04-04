import React from 'react'
import {TextField,Toolbar,RaisedButton,Dialog} from 'material-ui'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {NavigationArrowBack,NavigationArrowForward} from 'material-ui/svg-icons'
import style from '../index.styl'
import * as articles from '../../../store/articles'
import {connect} from 'react-redux'
import moment from 'moment'


class ArticleForm extends React.Component{
	state={title:"",content:""}
	async submit(){
		var data=this.state
		data.date=new Date()
		await articles.add(data)
		alert("保存成功")
		this.props.onClose()
		this.props.dispatch(articles.get())
	}
	render(){
		return (
			<div>
				<TextField floatingLabelText="标题" value={this.state.title} onChange={(e,val)=>this.setState({title:val})} fullWidth={true} /><br/>
				<TextField floatingLabelText="内容" value={this.state.content} onChange={(e,val)=>this.setState({content:val})} multiLine={true} fullWidth={true} /><br/><br/>
				<RaisedButton onClick={::this.submit} label="保存" />&emsp;
				<RaisedButton onClick={this.props.onClose} label="取消" />
			</div>
		)
	}
}

@connect(({articles})=>({data:articles.lists}))
export default class extends React.Component{
	state={open:false,selected:null}
	componentDidMount(){
		moment.locale('zh-cn')
		this.props.dispatch(articles.get())
	}
	async del(){
		if(!confirm("确定删除?")){
			return
		}
		await articles.del(this.state.selected)
		this.props.dispatch(articles.get())
		this.state.selected=null
	}
	render(){
		var data=this.props.data
		return(
			<div>
				<Table onRowSelection={it=>this.setState({selected:it[0]!==undefined?data[it[0]]._id:null})}>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn colSpan="3">
								<RaisedButton className={style.button} label="添加" onClick={()=>this.setState({open:true})} />
								<RaisedButton className={style.button} icon={<NavigationArrowBack />} />
								<RaisedButton className={style.button} icon={<NavigationArrowForward />} />
								<RaisedButton className={style.button} onClick={::this.del} backgroundColor="#f77272" labelColor="#fff" label="删除" disabled={!this.state.selected} />
							</TableHeaderColumn>
						</TableRow>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>标题</TableHeaderColumn>
							<TableHeaderColumn>日期</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody deselectOnClickaway={false}>
						{data&&data.map(it=>(
							<TableRow key={it._id}>
								<TableRowColumn>{it._id}</TableRowColumn>
								<TableRowColumn>{it.title}</TableRowColumn>
								<TableRowColumn>{moment(it.date||0).format('LLL')}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Dialog title="文章编辑" modal={false} open={this.state.open} onRequestClose={()=>this.setState({open:false})} autoScrollBodyContent={true}>
					<ArticleForm onClose={()=>this.setState({open:false})} dispatch={this.props.dispatch} />
        </Dialog>
			</div>
		)
	}
}
