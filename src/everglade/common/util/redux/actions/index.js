export const signInAction = (payload) => ({
    type: 'SIGN_IN', payload: payload
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