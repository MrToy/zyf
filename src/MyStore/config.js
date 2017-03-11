import db from './db'
import store from './'
//import firebase from 'firebase'

db.ref('config').on('value',res=>{
	store.dispatch({type:'config/change',data:res.val()})
})


//export const change=()=>{
	//db.ref('users').set({[user.uid]:{admin:true}})
	
	// firebase.auth().currentUser.updateProfile({
	// 	displayName: "toy",
	// 	photoURL: "https://example.com/jane-q-user/profile.jpg"
	// })
	//firebase.auth().createUserWithEmailAndPassword("1659808224@qq.com","123456o")
//}

export function set(args){
	db.ref('config').set(args)
}