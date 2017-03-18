import firebase from 'firebase'

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
	firebase.auth().onAuthStateChanged((user)=>{
		if(user){
			let data={
				name:user.displayName,
				email:user.email,
				emailVerified:user.emailVerified
			}
			store.dispatch({type:'user/login',data})
		}else{
			store.dispatch({type:'user/logout'})
		}
	})	
}

export function login(email, password){
	return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function logout(){
	return firebase.auth().signOut()
}

export function register(email,password){
	return firebase.auth().createUserWithEmailAndPassword(email,password)
}

export function sendEmailVerification(){
	var user=firebase.auth().currentUser
	return user.sendEmailVerification()
}
