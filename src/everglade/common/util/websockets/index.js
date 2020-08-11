import SocketIOClient, { Socket } from 'socket.io-client'

/**
 * @returns {Socket} Returns the websocket formatted to interact with our api
 */
export function getMessagingSocket(userUid, chatUIDs) {
    var socket = SocketIOClient('https://everglade-messaging-api.herokuapp.com/')
    // var socket = SocketIOClient('localhost:5000')

    //Runs when the websocket first connects
    socket.on('connect', () => {
        console.log('Connected')
    })

    //Runs right after the connection has been made
    socket.on('confirm', response => { 
        console.log(response)
        //Join the websocket rooms
        socket.emit('join_chats', { 'chats': chatUIDs})
        socket.emit('connect_user', { 'uid': userUid })
    })
    //Used for testing purposes
    socket.on('respond', response => { 
        console.log(response)
    })

    return socket
}