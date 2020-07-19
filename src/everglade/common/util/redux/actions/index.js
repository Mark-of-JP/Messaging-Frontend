//Actions used for redux

export const signInAction = (user) => ({
    type: 'SIGN_IN', payload: user
}) 

export const signOutAction = () => ({
    type: 'SIGN_OUT'
})

export const setAuthErrorAction = (error) => ({
    type: 'SET_ERROR',
    payload: error
})

export const removeAuthErrorAction = () => ({
    type: 'REMOVE_ERROR'
})

export const setSocketAction = (socket) => ({
    type: 'OPEN_SOCKET',
    payload: socket
})

export const removeSocketAction = () => ({
    type: 'CLOSE_SOCKET'
})

export const setUserAction = (info) => ({
    type: 'SET_USER_INFO',
    payload: info
})

export const removeUserAction = () => ({
    type: 'REMOVE_USER_INFO'
})

export const setMessageOptionAction = (option) => ({
    type: 'SET_MESSAGE_OPTION',
    payload: option
})

export const setCachedUsersActions = (users) => ({
    type: 'SET_CACHED_USERS',
    payload: users
})