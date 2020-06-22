import React, { Component } from 'react'
import SocketIOClient from 'socket.io-client'
import { Header } from 'semantic-ui-react';

var socket;
class WebsocketTest extends Component {

    constructor(props) {
        super(props)

        socket = SocketIOClient('everglade-messaging.web.app')
        socket.on('connect', () => console.log('poggers'))
        socket.on('pog', pog => console.log(pog))
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