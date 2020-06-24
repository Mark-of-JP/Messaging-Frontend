export const socketReducer = (state = null, action) => {
    switch(action.type) {
        case "OPEN_SOCKET":
            return action.payload

        case "CLOSE_SOCKET":
            if (state !== null)
                state.removeAllListeners()
            
            return null

        default:
            return state
    }
}