import SocketIOClient, { Socket } from 'socket.io-client'

/**
 * @returns {Socket} Returns the websocket formatted to interact with our api
 */
export function getMessagingSocket() {
    var socket = SocketIOClient('everglade-messaging.web.app')
    //socket = SocketIOClient('localhost:5000')
    socket.on('connect', () => console.log('poggers'))
    socket.on('pog', pog => console.log(pog))

    return socket
}