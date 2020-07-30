import React, { Component } from 'react'
import { Modal, Button, Icon, Input, List, Image } from 'semantic-ui-react'

class InviteModal extends Component {
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
                            <List.Item style={{ display: 'flex' }} >
                                <Image avatar placeholder />
                                <List.Content style={{ flex: 1, alignSelf: 'center', }}>
                                    <List.Header>Pog 1</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item >
                                <Image avatar placeholder />
                                <List.Content>
                                    <List.Header>Pog 2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item >
                                <Image avatar placeholder />
                                <List.Content>
                                    <List.Header>Pog 1</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default InviteModal