import SocketIOClient, { Socket } from 'socket.io-client'

var chats = []
/**
 * @returns {Socket} Returns the websocket formatted to interact with our api
 */
export function getMessagingSocket() {
    var socket = SocketIOClient('https://everglade-messaging-api.herokuapp.com/')
    //var socket = SocketIOClient('localhost:5000')
    socket.on('connect', () => {
        console.log('Connected')
    })
    socket.on('confirm', response => { 
        console.log(response)
        socket.emit('marco', { "echo": "echo"})
    })
    socket.on('respond', response => { 
        console.log(response)
        socket.emit('join_chats', { 'chats': chats})
    })
    socket.on('message_sent', message => {
        console.log("Poggers")
        console.log(message)
    })

    return socket
}

/**
 * @param {Socket} socket 
 * @param {[string]} chatIDs
 */
export function joinChatSockets(socket, chatIDs) {
    console.log('Joining Chats')
    chats = chatIDs
    // socket.emit('join_chats', { 'chats': chatIDs })
}