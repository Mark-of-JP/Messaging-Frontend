//Combines all reducers

import { combineReducers } from 'redux'
import { authReducer as auth, authErrorReducer as authError } from './authorizationReducer'
import { socketReducer as socket } from './socketReducer'

const rootReducer = combineReducers({
    auth, authError,
    socket
})

export default rootReducer