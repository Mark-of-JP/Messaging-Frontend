import React, { Component } from 'react'
import { Divider, Icon } from 'semantic-ui-react'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'



class MessagingPage extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#1B1C1D' }}>

                <MessagingSideBar />

                <div style={{flex:0.1, position:'relative'}}>
                    <Divider inverted vertical>
                        <Icon name='leaf' />
                    </Divider>
                </div>


                <MessagingMain />
            </div>
        )
    }

}

export default MessagingPage