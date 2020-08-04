import SocketIOClient, { Socket } from 'socket.io-client'

/**
 * @returns {Socket} Returns the websocket formatted to interact with our api
 */
export function getMessagingSocket() {
    var socket = SocketIOClient('everglade-messaging.web.app')
    //var socket = SocketIOClient('localhost:5000')
    socket.on('connect', () => {
        socket.emit('join_rooms', { 'eat': ['poggers', 'unpog'] })
    })
    socket.on('pog', pog => console.log(pog))

    return socket
}

/**
 * @param {Socket} socket 
 * @param {[string]} chatIDs
 */
export function joinChatSockets(socket, chatIDs) {
    socket.emit('join_chats', { 'chats': chatIDs })
}