import {createStore,combineReducers} from 'redux'
import {user} from './user'
import {config} from './config'

const store = createStore(combineReducers({user,config}))

export default store

export const bindActions=(actions)=>dispatch=>{
	let items={...actions}
	for(let i in items){
		if(items.hasOwnProperty(i) && typeof items[i]==='function'){
			let pre=items[i]
			items[i]=(...props)=>{
				let back=pre(...props)
				if(typeof back==='function'){
					return back(dispatch)
				}else if(back instanceof Promise){
					return back.then(dispatch)
				}else{
					return dispatch(back)
				}
			}
		}
	}
	return items
}
