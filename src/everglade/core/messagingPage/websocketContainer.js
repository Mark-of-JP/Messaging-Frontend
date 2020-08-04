import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    setSocketAction,
    updateCachedChatsACTION
} from '../../common/util/redux/actions'

import { fetchChat } from '../../common/util/apiCalls/chatCalls'
import { getMessagingSocket, joinChatSockets } from '../../common/util/websockets'

const WebsocketContainer = () => {

    //Hooks
    const dispatch = useDispatch()

    const socket = useSelector(state => state.socket)
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    //Starts the websocket if none exists
    if (socket === null) {
        let newSocket = getMessagingSocket()
        dispatch(setSocketAction(newSocket))

        joinChatSockets(newSocket, Object.keys(user.chats))

        newSocket.on('message_sent', message => {
            const chatUID = Object.keys(message)[0]
            console.log(chatUID)
            console.log('UPDATE')
            fetchChat(chatUID, auth['token'], 20)
                    .then(response => dispatch(updateCachedChatsACTION(response)))
        })
    }

    return (<div></div>)
}

export default WebsocketContainer