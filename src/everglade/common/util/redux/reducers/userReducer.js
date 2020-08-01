//Reducers for user information

export const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            return action.payload
        case 'UPDATE_USER_INFO':
            return {
                ...state,
                ...action.payload
            }
        case 'REMOVE_USER_INFO':
            return null
        default:
            return state
    }
}

export const cachedUsersReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_CACHED_USERS':
            return action.payload
        case 'UPDATE_CACHED_USERS':
            return {
                ...state,
                ...action.payload
            }
        case 'REMOVE_CACHED_USERS':
            return null
        default:
            return state
    }
}