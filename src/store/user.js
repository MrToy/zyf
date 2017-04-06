import request from 'superagent'
import {observable} from "mobx"

class User {
	@observable state={}
	login(name,pass){
		return new Promise((resolve,reject)=>{
			request
				.post('/api/user/login')
				.send({name,pass})
				.end((err,res)=>{
					if(err)return reject(err)
					this.state=res.body
					resolve()
				})
		})
	}
	// async info(){
	//
	// }
	// async register(name,pass){
	//
	// }
}

export default new User()
