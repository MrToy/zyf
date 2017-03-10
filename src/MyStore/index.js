import {createStore,combineReducers} from 'redux'
import store from 'store'
import {reducer as notificationsReducer} from 'reapop'

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

const Store = createStore(combineReducers({
	user,
	config,
	notifications:notificationsReducer()
}),store.get("cache"))

Store.subscribe(()=>{
	store.set("cache",Store.getState())
})

export default Store