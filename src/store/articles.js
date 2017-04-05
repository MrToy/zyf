import request from 'superagent'


export function add(data){
	return new Promise(resolve=>{
		request
			.post('/api/article')
			.send(data)
			.end(resolve)
	})
}

export function get(){
	return new Promise(resolve=>{
		request
			.get('/api/article?limit=10')
			.end((err,res)=>{
				resolve(res.body)
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
