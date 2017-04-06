import request from 'superagent'
import {observable} from "mobx"
import store from 'store'

class User {
	@observable state=store.get("user")||{}
	login(name,pass){
		return new Promise((resolve,reject)=>{
			request
				.post('/api/user/login')
				.send({name,pass})
				.end((err,res)=>{
					if(err)return reject(err)
					this.state=res.body
					store.set("user",this.state)
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
