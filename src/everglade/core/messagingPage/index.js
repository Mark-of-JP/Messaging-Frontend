import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'

import { setSocketAction, setMessageOptionAction, setUserAction, setCachedUsersActions } from '../../common/util/redux/actions'
import { getMessagingSocket } from '../../common/util/websockets'

import { fetchTokenUser, fetchMultipleUsers } from '../../common/util/apiCalls/userCalls'
import { getFriends } from '../../common/testInfo'

/**
 * The main messaging page of the website
 */
function MessagingPage() {

    //Hooks
    const history = useHistory()
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const socket = useSelector(state => state.socket)

    const messageOption = useSelector(state => state.messageOption)

    if (auth === null) {
        history.push('/')
        return (<div></div>)
    }

    if (user === null) {
        fetchTokenUser(auth['token'])
            .then(response => dispatch(setUserAction(response)))

        return (<div></div>)
    }

    if (cachedUsers === null) {
        fetchMultipleUsers(Object.keys(user.friends_list), auth['token'])
            .then(response => dispatch(setCachedUsersActions(response["users"])))

        return (<div></div>)
    }

    //Starts the websocket if none exists
    // if (socket === null)
    //     dispatch(setSocketAction(getMessagingSocket()))

    const setMessageOption = (option) => dispatch(setMessageOptionAction(option))
    const friendsInfo = cachedUsers.map(cachedUser => {
        if (Object.keys(user.friends_list).includes(cachedUser["uid"])) {
            return cachedUser
        }
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#1B1C1D' }}>

            <MessagingSideBar 
                setMessageOption={setMessageOption} 
                messageOption={messageOption}
                userInfo={user}
                friendsInfo={friendsInfo} />

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