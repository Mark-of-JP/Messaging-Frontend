import { combineReducers } from 'redux'
import auth from './authorizationReducer'

const rootReducer = combineReducers({
    auth
})

export default rootReducer