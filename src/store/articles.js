import db from './db'

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

export const getTops=()=>dispatch=>{
	db.ref('articles').limitToLast(10).once('value').then(res=>{
		dispatch({type:'articles/tops',data:res.val()})
	})
}

export const getLists=()=>dispatch=>{
	db.ref('articles').limitToLast(10).on('value',res=>{
		dispatch({type:'articles/lists',data:res.val()})
	})
}

export async function getAfterList(end){
	var res=await db.ref('articles').startAt(end).limitToFirst(10).once('value')
	var data=[]
	res.forEach(it=>{
		data.push({id:it.key,...it.val()})
	})
	return {data,start:data[0].id,end:data[data.length-1].id}
}

export async function getBeforeList(start){
	var query=start?db.ref('articles').endAt(start):db.ref('articles')
	var res=await query.limitToFirst(10).once('value')
	var data=[]
	res.forEach(it=>{
		data.push({id:it.key,...it.val()})
	})
	return {data,start:data[0].id,end:data[data.length-1].id}
}

export function add(article){
	article.date=Date.now()
	var key=db.ref('articles').push().key
	db.ref('articles').update({[key]:article})
}

