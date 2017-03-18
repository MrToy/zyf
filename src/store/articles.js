import db from './db'

export const reducer=(state={tops:[]},action)=>{
	switch(action.type){
		case 'articles/tops':
			return {...state,tops:action.data}
		default:
			return state
	}
}

export function init(store){
	db.ref('articles').limitToLast(10).on("value",res=>{
		store.dispatch({type:'articles/tops',data:res.val()})
	})
}

export function add(article){
	var key=db.ref('articles').push().key
	db.ref('articles').update({[key]:article})
}