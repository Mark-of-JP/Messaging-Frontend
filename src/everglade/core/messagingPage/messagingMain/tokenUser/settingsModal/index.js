import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Button, Icon, List } from 'semantic-ui-react'

import ChangeInfoForm from './changeInfoForm'
import ChangePictureModal from './changePictureModal'

import { updateTokenUserInfo } from '../../../../../common/util/apiCalls/userCalls'
import { setUserAction } from '../../../../../common/util/redux/actions'
import { getPictureKeys } from '../../../../../common/images/profilePictures'

const SettingsModal = props => {

    const [isModalShowing, toggleModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    //Hooks
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    const updateUserInfo = (displayName, description) => {
        updateTokenUserInfo(auth['token'], displayName, description, user['picture'])
            .then(response => {
                if (response.error) {
                    setErrorMessage(response.error)
                } else {
                    dispatch(setUserAction(response))
                }
                toggleModal(false)
            })
    }
    const choosePicture = pictureKey => {
        updateTokenUserInfo(auth['token'], user['display_name'], user['description'], pictureKey)
            .then(response => {
                if (response.error) {
                    setErrorMessage(response.error)
                } else {
                    dispatch(setUserAction(response))
                }
                toggleModal(false)
            })
    }

    return (
        <div>
            <Modal
                open={errorMessage !== ""}
                onClose={() => setErrorMessage("")}
                size="tiny"
            >
                <Modal.Header>Error</Modal.Header>
                <Modal.Content>
                    {errorMessage}
                </Modal.Content>
            </Modal>

            <Modal
                open={isModalShowing}
                onOpen={() => toggleModal(true)}
                onClose={() => toggleModal(false)}
                trigger={(
                    <Button inverted icon style={{ alignSelf: 'center', flex: 1, marginRight: '1em' }}>
                        <Icon name='cog' />
                    </Button>
                )}>
                <Modal.Header>Settings</Modal.Header>

                <Modal.Content>
                    <List celled>
                        <List.Item>
                            <ChangePictureModal
                                trigger={(
                                    <Button fluid style={{margin: '0.5em 0.5em'}} color="green">Change Profile Picture</Button>
                                )}
                                choices={getPictureKeys()}
                                onChoosePicture={choosePicture}
                            />
                        </List.Item>
                        <List.Item>
                            <ChangeInfoForm
                                displayName={user.display_name}
                                description={user.description}
                                updateUserInfo={updateUserInfo}
                            />
                        </List.Item>
                    </List>
                </Modal.Content>

                <Modal.Actions>
                    <Button onClick={() => toggleModal(false)}>Exit</Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default SettingsModal