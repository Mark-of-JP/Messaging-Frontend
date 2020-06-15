import { combineReducers } from 'redux'
import {authReducer as auth, authErrorReducer as authError} from './authorizationReducer'

const rootReducer = combineReducers({
    auth, authError
})

export default rootReducer