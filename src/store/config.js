import request from 'superagent'
import {observable} from "mobx"

class Config {
	@observable state={}
	constructor(){
		this.get()
	}
	set(data){
		return new Promise(resolve=>{
			request
				.put('/api/config/meta')
				.send(data)
				.end(()=>{
					this.state=data
					resolve()
				})
		})
	}
	get(){
		request
			.get('/api/config/meta')
			.end((err,res)=>{
				this.state=res.body
			})
	}
}

export default new Config()
