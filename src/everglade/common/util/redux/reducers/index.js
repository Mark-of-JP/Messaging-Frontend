//Combines all reducers

import { combineReducers } from 'redux'
import { authReducer as auth, authErrorReducer as authError } from './authorizationReducer'
import { socketReducer as socket } from './socketReducer'
import { userReducer as user, cachedUsersReducer as cachedUsers } from './userReducer'
import { cachedChatReducer as cachedChats } from './chatReducer'
import { messageOptionsReducer as messageOption } from './messagingOptionsReducer'

const rootReducer = combineReducers({
    auth, authError, messageOption,
    socket, user, cachedUsers, cachedChats
})

export default rootReducer