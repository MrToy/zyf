import React from 'react'
import Carouse from '../../../Carouse'
import Titlebar from '../../../Titlebar'
import style from './index.styl'
import * as articles from '../../../store/articles'

export default class extends React.Component {
  state={article:{}}
  async componentDidMount(){
    var article=await articles.getOne(this.props.match.params.id)
    this.setState({article})
  }
  render(){
    var {article}=this.state
    return (
    	<div>
    		<Carouse />
        <div className={style.article}>
    		  <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
    	</div>
    )
  }
}
