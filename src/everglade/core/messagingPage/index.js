import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'

import { 
    setSocketAction, 
    setMessageOptionAction, 
    setUserAction, 
    setCachedUsersActions, 
    setCachedChatsAction,
    updateCachedChatsACTION,
    sendMessageToChatAction
} from '../../common/util/redux/actions'
import { getMessagingSocket } from '../../common/util/websockets'

import { fetchTokenUser, fetchMultipleUsers } from '../../common/util/apiCalls/userCalls'
import { fetchMultipleSimpleChats, fetchChat, sendMessage } from '../../common/util/apiCalls/chatCalls'

var hasFetchedTokenUser = false
var hasFetchedCachedUsers = false
var hasFetchedCachedChats = false

/**
 * The main messaging page of the website
 */
function MessagingPage() {
    //Forced Update function
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    //Hooks
    const history = useHistory()
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const cachedChats = useSelector(state => state.cachedChats)
    const messageOption = useSelector(state => state.messageOption)
    const socket = useSelector(state => state.socket)

    //Redirect to different url checks
    if (auth === null) {
        history.push('/')
        return (<div></div>)
    }

    if (window.location.pathname === '/messaging') {
        history.push('/messaging/users/@me')
    }

    //Fetch data from the api
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
                .then(response => {
                    response['users'][user.uid] = user
                    dispatch(setCachedUsersActions(response["users"]))
            })
        }

        return (<div></div>)
    }

    //Starts the websocket if none exists
    // if (socket === null)
    //     dispatch(setSocketAction(getMessagingSocket()))

    //Formats data for components
    const chatUIDs = Object.keys(user.chats)
    if (!hasFetchedCachedChats) {
        hasFetchedCachedChats = true

        fetchMultipleSimpleChats(chatUIDs, auth['token'], cachedChats)
            .then(response => dispatch(setCachedChatsAction(response)))
    }

    const friendsInfo = { ...cachedUsers }
    Object.keys(friendsInfo).forEach(friendUID => {
        if (!(friendUID in user.friends_list))
            delete friendsInfo[friendUID]
    })
    const chatsInfo = { ...cachedChats }
    Object.keys(chatsInfo).forEach(chatUID => {
        if (!(chatUIDs.includes(chatUID)))
            delete chatsInfo[chatUID]
    })

    const setMessageOption = (option) => dispatch(setMessageOptionAction(option))
    const setMessagingUrl = (option, uid) => {
        history.push('/messaging/' + option + '/' + uid)
        forceUpdate()
    }
    const updateChatData = (chatUID, messageLimit) => {
        fetchChat(chatUID, auth['token'], messageLimit)
            .then(response => dispatch(updateCachedChatsACTION(response)))
            .then(() => forceUpdate())
    }
    const sendChatMessage = (chatUID, message) => {
        sendMessage(chatUID, auth['token'], message)
            .then(response => { 
                console.log(response)
                dispatch(sendMessageToChatAction(chatUID, response[Object.keys(response)[0]])) 
                forceUpdate()
            })
    }

    console.log(cachedChats)


    //Extracting parameters from url
    const parameters = window.location.pathname.split('/')
    const urlOption = parameters[2]
    const uid = parameters[3]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#1B1C1D' }}>

            <MessagingSideBar
                setMessageOption={setMessageOption}
                setMessagingUrl={setMessagingUrl}
                messageOption={messageOption}
                userInfo={user}
                friendsInfo={friendsInfo} 
                chatsInfo = {chatsInfo}
                cachedUsers = {cachedUsers}
                cachedChats = {cachedChats} />

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted vertical>
                    <Icon name='leaf' />
                </Divider>
            </div>


            <MessagingMain
                updateChatData={updateChatData}
                sendChatMessage={sendChatMessage}
                messageOption={messageOption}
                selectedUID={uid}
                urlOption={urlOption}
                user={user}
                cachedUsers={cachedUsers}
                cachedChats={cachedChats} />
        </div>
    )
}

export default MessagingPage