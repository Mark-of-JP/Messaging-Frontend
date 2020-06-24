import SocketIOClient from 'socket.io-client'

export function getMessagingSocket() {
    var socket = SocketIOClient('everglade-messaging.web.app')
    //socket = SocketIOClient('localhost:5000')
    socket.on('connect', () => console.log('poggers'))
    socket.on('pog', pog => console.log(pog))

    return socket
}