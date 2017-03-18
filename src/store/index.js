import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import st from 'store'
import * as config from './config'
import * as user from './user'


const store = createStore(combineReducers({
	user:user.reducer,
	config:config.reducer,
},applyMiddleware(thunk)),st.get("cache"))

config.init(store)
user.init(store)

store.subscribe(()=>{
	st.set("cache",store.getState())
})

export default store