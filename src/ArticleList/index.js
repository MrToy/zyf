import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import * as articles from '../store/articles'
import style from './index.styl'
import ReactPaginate from 'react-paginate'

export default class ArticleList extends React.Component {
  state={list:[]}
  componentWillMount(){
    moment.locale('zh-cn')
  }
  async componentDidMount(){
    var {type,pagination,page}=this.props
    var list=await articles.get({type,pagination,page})
    this.setState({list})
  }
  render(){
    return (
      <div>
        {this.state.list.map(it=>(
          <Link to={"/news/page/"+it._id} key={it._id}>
            <p>
              {it.title}
              <span className={style.date}>{moment(it.date||0).fromNow()}</span>
            </p>
          </Link>
        ))}
        {this.props.pagination&&(
          <ReactPaginate previousLabel={"⇦"}
                      nextLabel={"⇨"}
                      pageCount={10}
                      breakLabel={<span>...</span>}
                      onPageChange={()=>{}}
                      disabledClassName={style.disabled}
                      containerClassName={style.pagination}
                      activeClassName={style.active} />
        )}
      </div>
    )
  }
}
