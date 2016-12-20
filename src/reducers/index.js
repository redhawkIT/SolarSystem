import {combineReducers} from 'redux'
import ui from './UIReducer'


// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().
const rootReducer = combineReducers({ui})

export default rootReducer
