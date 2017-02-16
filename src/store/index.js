import {createStore,combineReducers} from 'redux'

const config=(state={key:0},action)=>{
	switch(action.type){
		case 'config/change':
			return {...state,...action.data}
		default:
			return state
	}
}

const user=(state={name:'toy',age:16},action)=>{
	switch(action.type){
		case 'user/change':
			return {...state,...{name:'other',age:state.age+1}}
		default:
			return state
	}
}

const store = createStore(combineReducers({user,config}))

export default store