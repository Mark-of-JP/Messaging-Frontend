import React, { Component } from 'react'
import { Modal, Button, Icon, List } from 'semantic-ui-react'

import AreYouSureModal from '../../../../common/components/areYouSureModal'
import { callLeaveChat } from '../../../../common/util/apiCalls/chatCalls'

class ChatSettingModal extends Component {

    state = {
        open: false
    }

    toggleModal = isOpen => this.setState({ open: isOpen })

    render() {
        return (
            <Modal
                onClose={() => this.toggleModal(false)}
                onOpen={() => this.toggleModal(true)}
                open={this.state.open}
                trigger={(
                    <Button inverted icon style={{ alignSelf: 'center', flex: 1, marginRight: '1em' }}>
                        <Icon name='cog' />
                    </Button>)}>
                <Modal.Header>Chat Settings</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <List celled>
                            <List.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <AreYouSureModal
                                    onConfirm={() => {
                                        this.toggleModal(false)
                                        this.props.leaveChat()
                                    }}
                                    trigger={(
                                        <Button color='red'>
                                            <Icon name='remove' />
                                            Leave Chat
                                        </Button>
                                    )} />
                            </List.Item>
                            <List.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <AreYouSureModal
                                    onConfirm={() => {
                                        this.toggleModal(false)
                                        this.props.deleteChat()
                                    }}
                                    trigger={(
                                        <Button color='red'>
                                            <Icon name='remove' />
                                            Delete Chat
                                        </Button>
                                    )} />
                            </List.Item>
                        </List>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default ChatSettingModal