import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'
import { useHistory } from 'react-router-dom'

function MessagingPage() {

    const currentUser = useSelector(state => state.auth)
    const history = useHistory()

    if (currentUser === null)
        history.push('/')

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#1B1C1D' }}>

            <MessagingSideBar />

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted vertical>
                    <Icon name='leaf' />
                </Divider>
            </div>


            <MessagingMain />
        </div>
    )
}

export default MessagingPage