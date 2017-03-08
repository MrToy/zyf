import store from './'
import firebase from 'firebase'

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

export function change(){
	login("1659808224@qq.com","123456o")
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
