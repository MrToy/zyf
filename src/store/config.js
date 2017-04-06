import request from 'superagent'
import {observable} from "mobx"
import user from './user'

class Config {
	@observable state={}
	constructor(){
		this.get()
	}
	set(data){
		return new Promise(resolve=>{
			request
				.put('/api/config/meta')
				.send(Object.assign(data,{token:user.state.token}))
				.end(()=>{
					this.state=data
					resolve()
				})
		})
	}
	get(){
		return new Promise(resolve=>{
			request
				.get('/api/config/meta')
				.end((err,res)=>{
					this.state=res.body
					resolve()
				})
		})
	}
}

export default new Config()
