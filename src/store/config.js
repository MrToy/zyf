import request from 'superagent'

export const reducer=(state={},action)=>{
	switch(action.type){
		case 'config/meta':
			return {...state,...action.data}
		default:
			return state
	}
}

export function set(data){
	return new Promise(resolve=>{
		request
			.put('/api/config/meta')
			.send(data)
			.end(resolve)
	})
}

export function get(){
	return new Promise(resolve=>{
		request
			.get('/api/config/meta')
			.end((err,res)=>{
				resolve({type:'config/meta',data:res.body})
			})
	})
}
