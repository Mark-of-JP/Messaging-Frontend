import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    setUserAction,
    setSocketAction,
    updateCachedChatsACTION
} from '../../common/util/redux/actions'

import { fetchTokenUser } from '../../common/util/apiCalls/userCalls'
import { fetchChat } from '../../common/util/apiCalls/chatCalls'
import { getMessagingSocket } from '../../common/util/websockets'

const WebsocketContainer = () => {

    //Hooks
    const dispatch = useDispatch()

    const socket = useSelector(state => state.socket)
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    //Starts the websocket if none exists
    if (socket === null) {
        let newSocket = getMessagingSocket(user.uid, Object.keys(user.chats))
        dispatch(setSocketAction(newSocket))

        newSocket.on('message_sent', message => {
            const chatUID = Object.keys(message)[0]
            fetchChat(chatUID, auth['token'], 20)
                    .then(response => dispatch(updateCachedChatsACTION(response)))
        })

        newSocket.on('user_updated', response => {
            console.log(response)
            fetchTokenUser(auth['token'])
                .then(response => dispatch(setUserAction(response)))
        })

        newSocket.on('chat_updated', message => {
            const chatUID = message['chat']
            fetchChat(chatUID, auth['token'], 20)
                    .then(response => dispatch(updateCachedChatsACTION(response)))
        })
    }

    return (<div></div>)
}

export default WebsocketContainer