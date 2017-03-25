export const reducer=(state={},action)=>{
	switch(action.type){
		case 'config/change':
			return {...state,...action.data}
		default:
			return state
	}
}

export function init(store){

}


export function set(key,value){

}