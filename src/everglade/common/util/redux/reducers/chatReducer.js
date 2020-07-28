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
        case 'SEND_MESSAGE_TO_CHAT':
            console.log(action.payload)
            state[action.payload['chatUID']].messages.push(action.payload['message'])

            return state
        case 'REMOVE_CACHED_CHATS':
            return {}

        default:
            return state
    }
}