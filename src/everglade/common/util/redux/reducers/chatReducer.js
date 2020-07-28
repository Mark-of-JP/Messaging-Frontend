//Reducers for chat information

export const cachedChatReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CACHED_CHATS':
            return action.payload
        case 'UPDATE_CACHED_CHATS':
            return {
                ...state,
                ...action.payload
            }
        case 'REMOVE_CACHED_CHATS':
            return {}

        default:
            return state
    }
}