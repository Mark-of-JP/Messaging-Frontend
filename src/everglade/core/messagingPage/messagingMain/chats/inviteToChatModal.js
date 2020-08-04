import React, { Component } from 'react'
import { Modal, Button, Icon, Input, List, Image } from 'semantic-ui-react'

import { callInviteToChat } from '../../../../common/util/apiCalls/chatCalls'

class InviteModal extends Component {

    state = {
        invitationSent: []
    }

    componentWillUnmount() {
        this.state.invitationSent = []
    }

    sendInvite(invitationUID) {
        callInviteToChat(this.props.chatUID, this.props.auth['token'], invitationUID)

        this.setState({ invitationSent: this.state.invitationSent.concat([invitationUID]) })
    }

    generateInvites = () => {

        return Object.keys(this.props.friendsInfo).map(friendUID => {
            let info = this.props.friendsInfo[friendUID]

            return (
                <List.Item key={friendUID} style={{ display: 'flex' }} onClick={() => this.sendInvite(friendUID)} >
                    <Image avatar placeholder />
                    <List.Content style={{ flex: 1, alignSelf: 'center' }}>
                        <List.Header>{info['display_name']}</List.Header>
                    </List.Content>

                    { this.state.invitationSent.includes(friendUID) && 
                        <List.Content style={{ flex: 1, alignSelf: 'center' }} floated='right' >
                            Invitation Sent!
                        </List.Content>
                    }
                </List.Item>
            )
        })
    }

    render() {
        return (
            <Modal centered={false} trigger={(
                <Button style={{ alignSelf: 'center', marginRight: '1em' }} icon labelPosition='right' color='green'>
                    <Icon name="user plus" />
                        Invite User
                </Button>
            )}>
                <Modal.Header>Invite Friend</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Input placeholder='Search...' icon='search' fluid />

                        <List celled selection>
                            {this.generateInvites()}
                        </List>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default InviteModal