import React, { Component } from 'react'
import { Button, Icon, Modal, Header, Form } from 'semantic-ui-react'

class CreateModal extends Component {

    state = {
        name: "",
        open: false
    }

    toggleModal = isOpen => this.setState({ open: isOpen })

    onSubmit = () => {
        this.props.optionInfo.onAddCreate(this.state.name)
        this.toggleModal(false)
    }

    render() {
        return (
            <Modal
                onClose={() => this.toggleModal(false)}
                onOpen={() => this.toggleModal(true)}
                open={this.state.open}
                centered={false} trigger={(
                    <Button fluid icon labelPosition='right' color='green'>
                        <Icon name="plus" />
                        {this.props.optionInfo.addButtonText}
                    </Button>)}>
                <Modal.Header>{this.props.optionInfo.addButtonText}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>{this.props.optionInfo.addText}</Header>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Input
                                placeholder={this.props.optionInfo.addText + '...'}
                                name='name'
                                value={this.state.name}
                                onChange={(e, v) => this.setState({ name: v['value'] })} />
                            <Form.Button content='Submit'>
                                {this.props.optionInfo.addButtonText}
                            </Form.Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateModal