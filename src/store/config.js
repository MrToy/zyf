import request from 'superagent'

export const reducer=(state={},action)=>{
	switch(action.type){
		case 'config/meta':
			return {...state,...action.data}
		default:
			return state
	}
}

export const set=data=>dispatch=>{
	request
		.put('/api/config/meta')
		.send(data)
		.end(()=>{
			dispatch({type:'config/meta',data})
		})
}

export const get=()=>dispatch=>{
	request
		.get('/api/config/meta')
		.end((err,res)=>{
			dispatch({type:'config/meta',data:res.body})
		})
}
