export const reducer=(state=null,action)=>{
	switch(action.type){
		case 'user/login':
			return {...state,...action.data}
		case 'user/logout':
			return null
		default:
			return state
	}
}

export function init(store){

}

export function login(email, password){

}

export function logout(){

}

export function register(email,password){

}
