import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { 
    updateCachedChatsACTION, 
    updateCachedUsersAction
} from '../../../common/util/redux/actions'

import { fetchChat } from '../../../common/util/apiCalls/chatCalls'

import UserMain from './users'
import ChatMain from './chats'
import { fetchMultipleUsers } from '../../../common/util/apiCalls/userCalls'

var fetchingUsers = []
var fetchingChats = []
var isChatLoading = false

/**
 * The messaging area of the messaging page
 */
const MessagingMain = props => {

    //Hooks
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const cachedChats = useSelector(state => state.cachedChats)

    if (props.urlOption === 'users') {
        if (props.selectedUID === '@me') {
            var currUser = user
            var isTokenUser = true
        }
        else if (props.selectedUID in cachedUsers) {
            currUser = cachedUsers[props.selectedUID]
            isTokenUser = false
        }
    }

    if (props.urlOption === 'chats') {
        if (!(props.selectedUID in cachedChats) || cachedChats[props.selectedUID]['simple'])
            if (!fetchingChats.includes(props.selectedUID)) {
                fetchingChats.push(props.selectedUID)
                isChatLoading = true

                props.forceUpdate()
                fetchChat(props.selectedUID, auth['token'], 20)
                    .then(response => dispatch(updateCachedChatsACTION(response)))
                    .then(() => fetchingChats = fetchingChats.filter(uid => uid !== props.selectedUID))
                    .then(() => props.forceUpdate())
            }

        var currChat = cachedChats[props.selectedUID]
        if (currChat && !currChat['simple']) {
            let unfetchedUsers = Object.keys(currChat.members).filter(uid => !(uid in cachedUsers) && !fetchingUsers.includes(uid))

            if (unfetchedUsers.length > 0) {
                fetchingUsers = fetchingUsers.concat(unfetchedUsers)
                isChatLoading = true

                props.forceUpdate()
                fetchMultipleUsers(unfetchedUsers, auth['token'])
                    .then(response => dispatch(updateCachedUsersAction(response['users'])))
                    .then(() => isChatLoading = false)
                    .then(() => fetchingUsers = fetchingUsers.filter(uid => !unfetchedUsers.includes(uid)))
                    .then(() => props.forceUpdate())
            }
        }
    }

    return (
        <div style={{ display: 'flex', flex: 4, flexDirection: 'column', maxHeight:'100vh', }}>

            {props.urlOption === 'users' &&
                <UserMain
                    currUser={currUser}
                    isTokenUser={isTokenUser} />
            }

            {props.urlOption === 'chats' &&
                <ChatMain
                    forceUpdate={props.forceUpdate}
                    chat={currChat}
                    chatUID={props.selectedUID}
                    cachedUsers={cachedUsers}
                    friendsInfo={props.friendsInfo}

                    isChatsLoading={isChatLoading} />}

        </div>
    )
}

export default MessagingMain