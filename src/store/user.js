import store from './'

export const change=(name)=>{
	store.dispatch({type:'user/change',data:{name}})
}