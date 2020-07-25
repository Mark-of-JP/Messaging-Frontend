import React, { Component } from 'react'
import { List, Image, Menu, Dropdown, Input, Button, Icon } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

import { MESSAGE_OPTIONS } from '../../common/util/redux/reducers/messagingOptionsReducer'

//The sidebar of the messaging page
class MessagingSideBar extends Component {

    messageOptionInfo = {
        [MESSAGE_OPTIONS.FRIENDS]: {
            addButtonText: 'Add Friend',
            generateContent: () => this.generateFriendsContent(this.props.friendsInfo)
        },
        [MESSAGE_OPTIONS.CHATS]: {
            addButtonText: 'Create Chat',
            generateContent: () => { }
        }
    }

    generateFriendsContent = (friendInfo) => {

        let friendContent = []

        Object.keys(friendInfo).forEach(friendUID => {
            let info = friendInfo[friendUID]

            friendContent.push((
                <List.Item>
                    <Image avatar placeholder />
                    <List.Content>
                        <List.Header>{info.display_name}</List.Header>
                    </List.Content>
                </List.Item>
            ))
        })

        return friendContent

    }

    render() {
        this.optionInfo = this.messageOptionInfo[this.props.messageOption]

        return (
            <Menu inverted vertical style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: '0em 0em' }}>
                <Menu.Item>
                    <Dropdown text={this.props.messageOption}
                        inline
                        fluid
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item text={MESSAGE_OPTIONS.FRIENDS} onClick={() => this.props.setMessageOption(MESSAGE_OPTIONS.FRIENDS)} />
                            <Dropdown.Item text={MESSAGE_OPTIONS.CHATS} onClick={() => this.props.setMessageOption(MESSAGE_OPTIONS.CHATS)} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item>
                    <Input placeholder='Search...' icon='search' />
                </Menu.Item>

                <PerfectScrollbar style={{ margin: '0em 1.5em', backgroundColor: '#1B1C1D' }}>
                    <List inverted selection verticalAlign='middle'>
                        <List.Item>
                            <Image avatar placeholder />
                            <List.Content>
                                <List.Header>YOU</List.Header>
                            </List.Content>
                        </List.Item>
                        {this.optionInfo.generateContent()}
                    </List>
                </PerfectScrollbar>

                <Menu.Item>
                    <Button fluid icon labelPosition='right' color='green'>
                        <Icon name="plus" />
                        {this.optionInfo.addButtonText}
                    </Button>
                </Menu.Item>
            </Menu>
        )
    }

}

export default MessagingSideBar