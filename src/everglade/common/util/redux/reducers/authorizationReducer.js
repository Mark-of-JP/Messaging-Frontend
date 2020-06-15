export const authReducer = (state = null, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return action.payload
        case 'SIGN_OUT':
            return null
        default:
            return state
    }
}

export const authErrorReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_ERROR':
            return action.payload
        case 'REMOVE_ERROR':
            return null
        default:
            return state
    }
}

export default authReducer