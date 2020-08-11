import React, { Component } from 'react'
import { Modal, Input, Button } from 'semantic-ui-react'

class EditModal extends Component {

    state = {
        message: "",
        open: false
    }

    toggleModal = isOpen => this.setState({ open: isOpen })

    onSubmit = () => {
        this.props.onSubmit(this.state.message)
        this.toggleModal(false)
    }

    render() {
        return (
            <Modal
                open={this.state.open}
                onOpen={() => {
                    this.setState({ message: this.props.message })
                    this.toggleModal(true)
                }}
                onClose={() => this.toggleModal(false)}
                trigger={this.props.trigger}
            >
                <Modal.Header>Edit Message</Modal.Header>

                <Modal.Content>
                    <Input
                        placeholder="Edit Message"
                        value={this.state.message}
                        onChange={(e, v) => this.setState({ message: v['value'] })}
                        fluid
                    />
                </Modal.Content>

                <Modal.Actions>
                    <Button color="green" onClick={this.onSubmit}>Submit</Button>
                    <Button color="red" onClick={() => this.toggleModal(false)}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default EditModal