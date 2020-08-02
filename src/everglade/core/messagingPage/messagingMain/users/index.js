import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Divider, Header, Button, Icon, Image, Container, Card } from 'semantic-ui-react'

import RequestSection from './requestSection'

import { fetchMultipleUsers } from '../../../../common/util/apiCalls/userCalls'
import { fetchMultipleSimpleChats } from '../../../../common/util/apiCalls/chatCalls'

import { 
    updateCachedChatsACTION, updateCachedUsersAction
} from '../../../../common/util/redux/actions'

import { MarkJP } from '../../../../common/images/developers'

const MainSection = props => {

    //Hooks
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const cachedChats = useSelector(state => state.cachedChats)

    let isChatRequestsLoading = Object.keys(user.chat_requests).length === 0
    let unknownChats = Object.keys(user.chat_requests).filter(uid => !(uid in cachedChats))
    if (unknownChats.length > 0) {
        isChatRequestsLoading = true

        fetchMultipleSimpleChats(unknownChats, auth['token'])
            .then(response => dispatch(updateCachedChatsACTION(response)))
            .then(() => isChatRequestsLoading = false)
    }

    let isUserRequestsLoading = Object.keys(user.friend_requests).length === 0
    let unknownUsers = Object.keys(user.friend_requests).filter(uid => !(uid in cachedUsers))
    if (unknownUsers.length > 0) {
        isUserRequestsLoading = true
        
        fetchMultipleUsers(unknownUsers, auth['token'])
            .then(response => dispatch(updateCachedUsersAction(response['users'])))
            .then(() => isUserRequestsLoading = false)
    }

    return (
        <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Header as='h2' inverted style={{ flex: 22 }} >{props.user.display_name}</Header>
                <Button inverted icon style={{ alignSelf: 'center', flex: 1, marginRight: '1em' }}><Icon name='cog' /></Button>
            </div>

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>

            <div style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 2 }}>
                    <Image circular size='medium' src={MarkJP} style={{ marginLeft: '1em' }} />
                    <Container text style={{ padding: '1em' }} >
                        <Header as='h2' inverted>Description</Header>
                        <Header as='h4' inverted >
                            {props.user.description}
                        </Header>
                    </Container>
                </div>
                <div style={{ display: 'flex', flex: 3 }}>
                    {props.isTokenUser && (
                        <Card.Group centered style={{ flex: 1, margin: '0.5em 0.5em', display: 'flex' }}>
                            <RequestSection 
                                title={'Friend Requests'}
                                requestUIDs={Object.keys(user.friend_requests)}
                                cachedValues={cachedUsers}
                                requestNameKey={'display_name'}
                                isLoading={isUserRequestsLoading}
                            />
                            <RequestSection 
                                title={'Chat Requests'}
                                requestUIDs={Object.keys(user.chat_requests)}
                                cachedValues={cachedChats}
                                requestNameKey={'chat_name'}
                                isLoading={isChatRequestsLoading}
                            />
                        </Card.Group>
                    )}
                </div>
            </div>


            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>
        </div>
    )
}

export default MainSection