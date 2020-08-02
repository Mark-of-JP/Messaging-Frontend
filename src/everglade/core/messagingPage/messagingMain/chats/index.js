import React from 'react'
import { Divider, Header, Button, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import InviteModal from './inviteToChatModal'
import MessagesSection from './messagesSection'

import { 
    sendMessageToChatAction
} from '../../../../common/util/redux/actions'
import { sendMessage } from '../../../../common/util/apiCalls/chatCalls'

const MainSection = props => {
    //Hooks
    const history = useHistory()
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)

    const visitUser = userUID => {
        history.push('/messaging/users/' + userUID)
        props.forceUpdate()
    }

    const sendChatMessage = (chatUID, message) => {
        sendMessage(chatUID, auth['token'], message)
            .then(response => { 
                console.log(response)
                dispatch(sendMessageToChatAction(chatUID, response[Object.keys(response)[0]])) 
                props.forceUpdate()
            })
    }

    return (
        <div style={{ display: 'flex', flex: 4, flexDirection: 'column', height: '100%' }}>
            <Dimmer active={props.isChatsLoading}>
                <Loader>Loading</Loader>
            </Dimmer>

            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Header as='h2' inverted style={{ flex: 22 }} >{props.chat['chat_name']}</Header>
                <InviteModal chatUID={props.chatUID} friendsInfo={props.friendsInfo} auth={props.auth} />
                <Button inverted icon style={{ alignSelf: 'center', flex: 1, marginRight: '1em' }}><Icon name='cog' /></Button>
            </div>

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>

            <MessagesSection
                sendMessage={sendChatMessage}
                visitUser={visitUser}
                user={user}
                chat={props.chat}
                chatUID={props.chatUID}
                cachedUsers={cachedUsers}
            />
        </div>
    )
}

export default MainSection