import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Divider, Header, Button, Icon, Image, Container, Modal } from 'semantic-ui-react'

import SettingsModal from './settingsModal'

import { MarkJP } from '../../../../common/images/developers'

const MainSection = props => {

    const [isModalShowing, toggleModalShowing] = useState(false)

    //Hooks
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cachedUsers = useSelector(state => state.cachedUsers)
    const cachedChats = useSelector(state => state.cachedChats)

    const isUnknown = !(props.userUID in props.friendsInfo)

    const onInviteFriend = () => {
        toggleModalShowing(true)
    }

    return (
        <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Header as='h2' inverted style={{ flex: 22 }} >{props.currUser.display_name}</Header>
                {isUnknown && (
                    <Button style={{ alignSelf: 'center', marginRight: '1em' }} icon labelPosition='right' color='green'
                    onClick={onInviteFriend}>
                        <Icon name="user plus" />
                        Add Friend
                    </Button>
                )}
                <SettingsModal 
                    isUnknown={isUnknown}/>
            </div>

            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>

            <div style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 2 }}>
                    <Image circular size='medium' src={MarkJP} style={{ marginLeft: '1em' }} />
                    <Container text style={{ padding: '1em' }} >
                        <Header as='h2' inverted>Description</Header>
                        <Header as='h4' inverted >
                            {props.currUser.description}
                        </Header>
                    </Container>
                </div>
                <div style={{ display: 'flex', flex: 3 }}>

                </div>
            </div>

            <Modal
                onClose={() => toggleModalShowing(false)}
                onOpen={() => toggleModalShowing(true)}
                open={isModalShowing} >
                <Modal.Header>Request Sent!</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        Friend request has been sent!
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => toggleModalShowing(false)}>
                        Proceed
                    </Button>
                </Modal.Actions>
            </Modal>


            <div style={{ flex: 0.1, position: 'relative' }}>
                <Divider inverted />
            </div>
        </div>
    )
}

export default MainSection