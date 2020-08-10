import React, { useEffect } from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import WebsocketContainer from './websocketContainer'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'

import {
    setSocketAction,
    setUserAction,
    setCachedUsersActions,
} from '../../common/util/redux/actions'

import { fetchTokenUser, fetchMultipleUsers } from '../../common/util/apiCalls/userCalls'

var hasFetchedTokenUser = false
var hasFetchedCachedUsers = false

/**
 * The main messaging page of the website
 */
function MessagingPage() {

    document.body.style.overflow = "hidden"

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

    useEffect(() => {
        history.listen((location, action) => {
            if (action === 'POP' && location.pathname.split('/')[1] === 'messaging')
                forceUpdate()
        })
    })

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

    //Formats data for components
    const friendsInfo = { ...cachedUsers }
    Object.keys(friendsInfo).forEach(friendUID => {
        if (!(friendUID in user.friends_list))
            delete friendsInfo[friendUID]
    })
    const chatUIDs = Object.keys(user.chats)
    const chatsInfo = { ...cachedChats }
    Object.keys(chatsInfo).forEach(chatUID => {
        if (!(chatUIDs.includes(chatUID)))
            delete chatsInfo[chatUID]
    })

    //Extracting parameters from url
    const parameters = window.location.pathname.split('/')
    const urlOption = parameters[2]
    const uid = parameters[3]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', width:'100vw', backgroundColor: '#1B1C1D' }}>

            <WebsocketContainer />

            <MessagingSideBar
                forceUpdate={forceUpdate}
                friendsInfo={friendsInfo}
                chatsInfo={chatsInfo}
                />

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted vertical>
                    <Icon name='leaf' />
                </Divider>
            </div>


            <MessagingMain
                forceUpdate={forceUpdate}
                messageOption={messageOption}
                selectedUID={uid}
                urlOption={urlOption}
                friendsInfo={friendsInfo} />
        </div>
    )
}

export default MessagingPage