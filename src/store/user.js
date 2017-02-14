export const user=(state={name:"toy",age:16},action)=>{
	switch(action.type){
		case "user/change":
			return {...state,...{name:"other",age:state.age+1}}
		default:
			return state
	}
}

export const changeUser=(name)=>dispatch=>{
	dispatch({type:"user/change"})
}