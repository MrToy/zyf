import db from './db'
import store from './'

db.ref('config').on('value',res=>{
	store.dispatch({type:'config/change',data:res.val()})
})

export const change=()=>{
	db.ref('config').set({key:Math.random()})
}