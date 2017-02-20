import {createStore,combineReducers} from 'redux'
import Store from 'store'

const config=(state={key:0},action)=>{
	switch(action.type){
		case 'config/change':
			return {...state,...action.data}
		default:
			return state
	}
}

const user=(state=null,action)=>{
	switch(action.type){
		case 'user/login':
			return {...state,...action.data}
		case 'user/logout':
			return null
		default:
			return state
	}
}

const store = createStore(combineReducers({user,config}),Store.get("cache"))

store.subscribe(()=>{
	Store.set("cache",store.getState())
})

export default store