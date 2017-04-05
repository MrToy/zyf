import React from 'react'
import {TextField,Toolbar,RaisedButton,Dialog,SelectField,MenuItem} from 'material-ui'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {NavigationArrowBack,NavigationArrowForward} from 'material-ui/svg-icons'
import style from '../index.styl'
import {connect} from 'react-redux'
import moment from 'moment'
import * as articles from '../../../store/articles'


class ArticleForm extends React.Component{
	state={title:"",content:"",type:"新闻中心"}
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
				<TextField floatingLabelText="标题" value={this.state.title} onChange={(e,val)=>this.setState({title:val})} /><br/>
				<SelectField floatingLabelText="分类" value={this.state.type} onChange={(e,i,val)=>this.setState({type:val})} >
					<MenuItem value="新闻中心" primaryText="新闻中心" />
					<MenuItem value="加盟动态" primaryText="加盟动态" />
				</SelectField>
				<TextField floatingLabelText="内容" value={this.state.content} onChange={(e,val)=>this.setState({content:val})} multiLine={true} fullWidth={true} /><br/><br/>
				<RaisedButton onClick={::this.submit} label="保存" />&emsp;
				<RaisedButton onClick={this.props.onClose} label="取消" />
			</div>
		)
	}
}

export default class extends React.Component{
	state={open:false,selected:null,list:[]}
	async componentDidMount(){
		moment.locale('zh-cn')
		var list=await articles.get()
		this.setState({list})
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
		return(
			<div>
				<Table onRowSelection={it=>this.setState({selected:it[0]!==undefined?data[it[0]]._id:null})}>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn colSpan="4">
								<RaisedButton className={style.button} label="添加" onClick={()=>this.setState({open:true})} />
								<RaisedButton className={style.button} icon={<NavigationArrowBack />} />
								<RaisedButton className={style.button} icon={<NavigationArrowForward />} />
								<RaisedButton className={style.button} onClick={::this.del} backgroundColor="#f77272" labelColor="#fff" label="删除" disabled={!this.state.selected} />
							</TableHeaderColumn>
						</TableRow>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>标题</TableHeaderColumn>
							<TableHeaderColumn>分类</TableHeaderColumn>
							<TableHeaderColumn>日期</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody deselectOnClickaway={false}>
						{this.state.list.map(it=>(
							<TableRow key={it._id}>
								<TableRowColumn>{it._id}</TableRowColumn>
								<TableRowColumn>{it.title}</TableRowColumn>
								<TableRowColumn>{it.type}</TableRowColumn>
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
