import db from './db'

export const reducer=(state={},action)=>{
	switch(action.type){
		case 'config/change':
			return {...state,...action.data}
		default:
			return state
	}
}

export function init(store){
	db.ref('config').on('value',res=>{
		store.dispatch({type:'config/change',data:res.val()})
	})
}


export function set(args){
	db.ref('config').set(args)
}