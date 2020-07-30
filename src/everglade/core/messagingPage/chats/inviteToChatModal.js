import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'

class InviteModal extends Component {
    render() {
        return (
            <Modal centered={false} trigger={(
                <Button style={{ alignSelf: 'center',  marginRight: '1em' }} icon labelPosition='right' color='green'>
                        <Icon name="user plus" />
                        Invite User
                    </Button>
            )}>
                <Modal.Header>Invite Friend</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default InviteModal