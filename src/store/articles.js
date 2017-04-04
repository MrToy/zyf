import request from 'superagent'

export const reducer=(state={tops:[],lists:[]},action)=>{
	switch(action.type){
		case 'articles/tops':
			return {...state,tops:action.data}
		case 'articles/lists':
			return {...state,lists:action.data}
		default:
			return state
	}
}

export function add(data){
	return new Promise(resolve=>{
		request
			.post('/api/article')
			.send(data)
			.end(resolve)
	})
}

export function getTops(){
	return new Promise(resolve=>{
		request
			.get('/api/article?limit=10')
			.end((err,res)=>{
				resolve({type:'articles/tops',data:res.body})
			})
	})
}

export function get(){
	return new Promise(resolve=>{
		request
			.get('/api/article')
			.end((err,res)=>{
				resolve({type:'articles/lists',data:res.body})
			})
	})
}

export function getOne(id){
	return new Promise(resolve=>{
		request
			.get('/api/article/'+id)
			.end((err,res)=>{
				resolve(res.body)
			})
	})
}

export function del(id){
	return new Promise(resolve=>{
		request
			.delete('/api/article/'+id)
			.end(resolve)
	})
}
