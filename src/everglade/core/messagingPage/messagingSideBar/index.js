import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Sidebar from './sideBarSection'

import {
    setMessageOptionAction,
    updateUserAction,
    setCachedChatsAction,
    updateCachedChatsACTION,
    updateCachedUsersAction
} from '../../../common/util/redux/actions'

import { fetchMultipleSimpleChats, callCreateChat } from '../../../common/util/apiCalls/chatCalls'
import { fetchUserByDisplayName } from '../../../common/util/apiCalls/userCalls'

var isChatSidebarLoading = false
var fetchingChats = []

//The sidebar of the messaging page
const MessagingSideBar = props => {

    //Hooks
    const history = useHistory()
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const cachedChats = useSelector(state => state.cachedChats)
    const messageOption = useSelector(state => state.messageOption)
    
    const chatUIDs = Object.keys(user.chats)
    const unfetchedChats = chatUIDs.filter(uid => !(uid in cachedChats) && !fetchingChats.includes(uid))
    if (unfetchedChats.length > 0) {
        fetchingChats = fetchingChats.concat(unfetchedChats)
        isChatSidebarLoading = true
        fetchMultipleSimpleChats(chatUIDs, auth['token'], cachedChats)
            .then(response => {
                isChatSidebarLoading = false
                dispatch(setCachedChatsAction(response))
            })
    }

    const setMessageOption = (option) => dispatch(setMessageOptionAction(option))
    const setMessagingUrl = (option, uid) => {
        history.push('/messaging/' + option + '/' + uid)
        props.forceUpdate()
    }

    const createChat = chatName => {
        callCreateChat(auth['token'], chatName)
            .then(response => {
                const chatUID = Object.keys(response)[0]

                const simpleResponse = {
                    [chatUID]: {
                        ...response[chatUID],
                    }
                }
                delete simpleResponse[chatUID].messages
                simpleResponse[chatUID].simple = true


                dispatch(updateCachedChatsACTION(simpleResponse))

                user.chats[chatUID] = true
                dispatch(updateUserAction(user))
            })
    }

    const visitUnknownUser = displayName => {
        fetchUserByDisplayName(displayName)
            .then(response => { 
                if(response.error) {
                    
                } else {
                    history.replace('/messaging/users/' + Object.keys(response)[0])
                    dispatch(updateCachedUsersAction(response))
                }
            })
    }

    return (
        <Sidebar
            setMessageOption={setMessageOption}
            setMessagingUrl={setMessagingUrl}
            createChat={createChat}
            visitUnknownUser={visitUnknownUser}
            messageOption={messageOption}
            userInfo={user}
            friendsInfo={props.friendsInfo}
            chatsInfo={props.chatsInfo}
            cachedUsers={cachedUsers}
            cachedChats={cachedChats}

            isChatSidebarLoading={isChatSidebarLoading}
        />
    )
}

export default MessagingSideBar