import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import st from 'store'
import * as config from './config'
import * as user from './user'
import * as articles from './articles'


const store = createStore(combineReducers({
	user:user.reducer,
	config:config.reducer,
	articles:articles.reducer
}),st.get("cache"),applyMiddleware(thunk))

config.init(store)
user.init(store)

store.subscribe(()=>{
	st.set("cache",store.getState())
})

export default store