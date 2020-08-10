import React, { Component } from 'react'
import { Modal, List, Image } from 'semantic-ui-react'
import { getProfilePictureInfo } from '../../../../../common/images/profilePictures'

class ChangeProfilePictureModal extends Component {

    state = {
        open: false
    }

    toggleModal = isOpen => this.setState({ open: isOpen })

    onChoosePicture = pictureKey => {
        this.toggleModal(false)
        this.props.onChoosePicture(pictureKey)
    }

    generateChoices = () => {
        return this.props.choices.map(pictureKey => {
            const pictureInfo = getProfilePictureInfo(pictureKey)
            return (
                <List.Item style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image style={{ alignSelf: 'center', margin: '0.5em 0em' }} size='big' as="a" src={pictureInfo['picture']}
                        onClick={() => this.onChoosePicture(pictureKey)} />
                    <div style={{ alignSelf: 'center'}}>
                        <p>Source: {pictureInfo['source']}</p>
                    </div>
                </List.Item>
            )
        })
    }

    render() {
        return (
            <Modal
                open={this.state.open}
                onOpen={() => this.toggleModal(true)}
                onClose={() => this.toggleModal(false)}
                trigger={this.props.trigger}
            >
                <Modal.Header>Change Profile Picture</Modal.Header>
                <Modal.Content>
                    <List celled>
                        {this.generateChoices()}
                    </List>
                </Modal.Content>
            </Modal>
        )
    }
}

export default ChangeProfilePictureModal