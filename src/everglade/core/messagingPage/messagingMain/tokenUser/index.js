import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Divider, Header, Button, Icon, Image, Container, Card } from 'semantic-ui-react'

import RequestSection from './requestSection'
import SettingsModal from './settingsModal'

import { fetchTokenUser, fetchMultipleUsers, callAcceptFriendRequest, callDeclineFriendRequest } from '../../../../common/util/apiCalls/userCalls'
import { fetchMultipleSimpleChats, acceptInviteToChat, declineInviteToChat } from '../../../../common/util/apiCalls/chatCalls'

import {
    setUserAction,
    updateCachedChatsACTION,
    updateCachedUsersAction
} from '../../../../common/util/redux/actions'

import { getProfilePictureInfo } from '../../../../common/images/profilePictures'

const MainSection = props => {

    //Hooks
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const cachedChats = useSelector(state => state.cachedChats)

    var isChatRequestsLoading = Object.keys(user.chat_requests).length === 0
    var unknownChats = Object.keys(user.chat_requests).filter(uid => !(uid in cachedChats))
    if (unknownChats.length > 0) {
        isChatRequestsLoading = true

        fetchMultipleSimpleChats(unknownChats, auth['token'])
            .then(response => dispatch(updateCachedChatsACTION(response)))
            .then(() => isChatRequestsLoading = false)
    }

    var isUserRequestsLoading = Object.keys(user.friend_requests).length === 0
    var unknownUsers = Object.keys(user.friend_requests).filter(uid => !(uid in cachedUsers))
    if (unknownUsers.length > 0) {
        isUserRequestsLoading = true

        fetchMultipleUsers(unknownUsers, auth['token'])
            .then(response => dispatch(updateCachedUsersAction(response['users'])))
            .then(() => isUserRequestsLoading = false)
    }

    const acceptFriendRequest = userUID => {
        callAcceptFriendRequest(userUID, auth['token'])
            .then(() => fetchTokenUser(auth['token']))
            .then(response => dispatch(setUserAction(response)))
    }
    const declineFriendRequest = userUID => {
        callDeclineFriendRequest(userUID, auth['token'])
            .then(() => fetchTokenUser(auth['token']))
            .then(response => dispatch(setUserAction(response)))
    }

    const acceptChatRequest = chatUID => {
        acceptInviteToChat(chatUID, auth['token'])
            .then(() => fetchTokenUser(auth['token']))
            .then(response => dispatch(setUserAction(response)))
    }
    const declineChatRequest = chatUID => {
        declineInviteToChat(chatUID, auth['token'])
            .then(() => fetchTokenUser(auth['token']))
            .then(response => dispatch(setUserAction(response)))
    }

    return (
        <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Header as='h2' inverted style={{ flex: 22 }} >{props.currUser.display_name}</Header>
                <SettingsModal />
            </div>

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>

            <div style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 2 }}>
                    <Image circular size='medium' src={getProfilePictureInfo(props.currUser.picture)['picture']} style={{ marginLeft: '1em' }} />
                    <Container text style={{ padding: '1em' }} >
                        <Header as='h2' inverted>Description</Header>
                        <Header as='h4' inverted >
                            {props.currUser.description}
                        </Header>
                    </Container>
                </div>
                <div style={{ display: 'flex', flex: 3 }}>
                    <Card.Group centered style={{ flex: 1, margin: '0.5em 0.5em', display: 'flex' }}>
                        <RequestSection
                            acceptRequest={acceptFriendRequest}
                            declineRequest={declineFriendRequest}
                            title={'Friend Requests'}
                            requestUIDs={Object.keys(user.friend_requests)}
                            cachedValues={cachedUsers}
                            requestNameKey={'display_name'}
                            isLoading={isUserRequestsLoading}
                        />
                        <RequestSection
                            acceptRequest={acceptChatRequest}
                            declineRequest={declineChatRequest}
                            title={'Chat Requests'}
                            requestUIDs={Object.keys(user.chat_requests)}
                            cachedValues={cachedChats}
                            requestNameKey={'chat_name'}
                            isLoading={isChatRequestsLoading}
                        />
                    </Card.Group>
                </div>
            </div>


            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>
        </div>
    )
}

export default MainSection