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

}

export const getLists=()=>dispatch=>{

}

export async function getAfterList(end){

}

export async function getBeforeList(start){

}

export function add(article){

}

