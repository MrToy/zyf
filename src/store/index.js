import {createStore,combineReducers} from 'redux'
import st from 'store'
import userReducer from './userReducer'
import configReducer from './configReducer'


const store = createStore(combineReducers({
	user:userReducer,
	config:configReducer,
}),st.get("cache"))


store.subscribe(()=>{
	st.set("cache",store.getState())
})

export default store