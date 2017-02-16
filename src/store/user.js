import store from './store'

export const change=(name)=>{
	store.dispatch({type:'user/change',name})
}