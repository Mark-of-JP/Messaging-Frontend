import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'

import { setSocketAction, setMessageOptionAction, setUserAction, setCachedUsersActions, setCachedChatsAction } from '../../common/util/redux/actions'
import { getMessagingSocket } from '../../common/util/websockets'

import { fetchTokenUser, fetchMultipleUsers } from '../../common/util/apiCalls/userCalls'
import { fetchSimpleChat, fetchMultipleSimpleChats } from '../../common/util/apiCalls/chatCalls'
import { getFriends } from '../../common/testInfo'

var hasFetchedTokenUser = false
var hasFetchedCachedUsers = false
var hasFetchedCachedChats = false

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
    const cachedChats = useSelector(state => state.cachedChats)
    const socket = useSelector(state => state.socket)

    const messageOption = useSelector(state => state.messageOption)

    if (auth === null) {
        history.push('/')
        return (<div></div>)
    }

    if (user === null) {
        if (!hasFetchedTokenUser) {
            hasFetchedTokenUser = true

            fetchTokenUser(auth['token'])
                .then(response => dispatch(setUserAction(response)))
        }

        return (<div></div>)
    }

    if (cachedUsers === null) {
        if (!hasFetchedCachedUsers) {
            hasFetchedCachedUsers = true

            fetchMultipleUsers(Object.keys(user.friends_list), auth['token'])
                .then(response => dispatch(setCachedUsersActions(response["users"])))
        }

        return (<div></div>)
    }

    if (!hasFetchedCachedChats) {
        hasFetchedCachedChats = true

        const chatUIDs = Object.keys(user.chats)
        fetchMultipleSimpleChats(chatUIDs, auth['token'], cachedChats)
            .then(response => dispatch(setCachedChatsAction(response)))
    }
    console.log(cachedUsers)
    console.log(cachedChats)

    //Starts the websocket if none exists
    // if (socket === null)
    //     dispatch(setSocketAction(getMessagingSocket()))

    const setMessageOption = (option) => dispatch(setMessageOptionAction(option))
    const friendsInfo = { ...cachedUsers }
    Object.keys(friendsInfo).forEach(friendUID => {
        if (!(friendUID in user.friends_list))
            delete friendsInfo[friendUID]
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