//Combines all reducers

import { combineReducers } from 'redux'
import { authReducer as auth, authErrorReducer as authError } from './authorizationReducer'
import { socketReducer as socket } from './socketReducer'
import { userReducer as user, cachedUsersReducer as cachedUsers } from './userReducer'
import { messageOptionsReducer as messageOption } from './messagingOptionsReducer'

const rootReducer = combineReducers({
    auth, authError, messageOption,
    socket, user, cachedUsers
})

export default rootReducer