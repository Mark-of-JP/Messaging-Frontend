import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'
import { setSocketAction } from '../../common/util/redux/actions'
import { getMessagingSocket } from '../../common/util/websockets'

/**
 * The main messaging page of the website
 */
function MessagingPage() {

    //Hooks
    const history = useHistory()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.auth)
    const socket = useSelector(state => state.socket)

    if (currentUser === null)
        history.push('/')

    //Starts the websocket if none exists
    if (socket === null)
        dispatch(setSocketAction(getMessagingSocket()))

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