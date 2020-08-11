import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'

/**
 * Modal used to confirm actions and run these actions once the user clicks confirm
 */
class AreYouSureModel extends Component {

    state = {
        open: false
    }

    toggleModal = isOpen =>  this.setState({ open: isOpen })

    onConfirm = () => {
        if (this.props.onConfirm)
            this.props.onConfirm()

        this.toggleModal(false)
    }

    onCancel = () => this.toggleModal(false)

    render() {
        return (
            <Modal
                size='tiny'
                onClose={() => this.toggleModal(false)}
                onOpen={() => this.toggleModal(true)}
                open={this.state.open}
                trigger={this.props.trigger}>
                <Modal.Header>Confirm Choice</Modal.Header>
                <Modal.Content>Are you sure? This action is not reversable</Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.onConfirm}>
                        Confirm
                        </Button>
                    <Button color='red' onClick={this.onCancel}>
                        Cancel
                        </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default AreYouSureModel