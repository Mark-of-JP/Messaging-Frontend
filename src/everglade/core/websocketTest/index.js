import React, { Component } from 'react'
import SocketIOClient from 'socket.io-client'
import { Header } from 'semantic-ui-react';

var socket;
/**
 * For debugging uses only
 * Tests the websocket
 */
class WebsocketTest extends Component {

    constructor(props) {
        super(props)

        socket = SocketIOClient('everglade-messaging.web.app')
        //socket = SocketIOClient('localhost:5000')
        socket.on('connect', () => console.log('poggers'))
        socket.on('confirm', pog => console.log(pog))
    }

    render() {
        return (
            <div>
                <Header>Socket Test</Header>
            </div>
        )
    }
}

export default WebsocketTest