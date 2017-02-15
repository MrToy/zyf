export const config=(state={type:'x'},action)=>{
	switch(action.type){
		case 'config/change':
			return {...state,...{type:'xx'}}
		default:
			return state
	}
}

export const changeConfig=(name)=>dispatch=>{
	dispatch({type:'config/change',name})
}