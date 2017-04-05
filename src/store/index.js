import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import st from 'store'
import * as config from './config'
import * as user from './user'



const store = createStore(combineReducers({
	user:user.reducer,
	config:config.reducer
}),st.get("cache"),applyMiddleware(thunk,reduxPromise))


store.subscribe(()=>{
	st.set("cache",store.getState())
})

export default store
