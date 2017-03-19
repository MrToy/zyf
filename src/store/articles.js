import db from './db'

export const reducer=(state={tops:[],lists:[],index:1},action)=>{
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

export function add(article){
	article.date=Date.now()
	var key=db.ref('articles').push().key
	db.ref('articles').update({[key]:article})
}

