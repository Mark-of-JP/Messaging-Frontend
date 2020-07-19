//Reducers for message options
export const MESSAGE_OPTIONS = {
    FRIENDS: 'Friends',
    CHATS: 'Chats'
}

export const messageOptionsReducer = (state = MESSAGE_OPTIONS.FRIENDS, action) => {
    switch(action.type) {
        case 'SET_MESSAGE_OPTION':
            return action.payload
        default:
            return state
    }
}