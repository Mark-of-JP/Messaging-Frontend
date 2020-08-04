import SocketIOClient, { Socket } from 'socket.io-client'

/**
 * @returns {Socket} Returns the websocket formatted to interact with our api
 */
export function getMessagingSocket(userUid, chatUIDs) {
    var socket = SocketIOClient('https://everglade-messaging-api.herokuapp.com/')
    // var socket = SocketIOClient('localhost:5000')
    socket.on('connect', () => {
        console.log('Connected')
    })
    socket.on('confirm', response => { 
        console.log(response)
        socket.emit('join_chats', { 'chats': chatUIDs})
        socket.emit('connect_user', { 'uid': userUid })
    })
    socket.on('respond', response => { 
        console.log(response)
    })
    socket.on('message_sent', message => {
        console.log("Poggers")
        console.log(message)
    })
    socket.on('user_updated', response => {
        console.log(response)
    })

    return socket
}