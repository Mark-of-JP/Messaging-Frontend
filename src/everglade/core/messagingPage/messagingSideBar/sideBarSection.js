import React, { Component } from 'react'
import { List, Image, Menu, Dropdown, Input, Dimmer, Loader } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import CreateModal from './messagingCreateModal'

import 'react-perfect-scrollbar/dist/css/styles.css'

import filterByName from '../../../common/util/basics/filterByName'
import { MESSAGE_OPTIONS } from '../../../common/util/redux/reducers/messagingOptionsReducer'

//The sidebar of the messaging page
class MessagingSideBar extends Component {

    state = {
        search: '',
        isSidebarVisible: false
    }

    messageOptionInfo = {
        [MESSAGE_OPTIONS.FRIENDS]: {
            option: 'users',
            nameKey: 'display_name',
            addButtonText: 'Visit User',
            addText: 'Display Name',
            generateContent: () => this.generateSidebar(this.props.friendsInfo),
            onAddCreate: this.props.visitUnknownUser
        },
        [MESSAGE_OPTIONS.CHATS]: {
            option: 'chats',
            nameKey: 'chat_name',
            addButtonText: 'Create Chat',
            addText: 'Chat Name',
            generateContent: () => this.generateSidebar(this.props.chatsInfo),
            onAddCreate: this.props.createChat
        }
    }

    generateSidebar = rawInfo => {
        let filteredInfo = filterByName(this.state.search, rawInfo, this.optionInfo.nameKey)

        let content = []

        Object.keys(filteredInfo).forEach(uid => {
            let info = rawInfo[uid]

            content.push((
                <List.Item onClick={() => this.props.setMessagingUrl(this.optionInfo.option, uid)}>
                    <Image avatar placeholder />
                    <List.Content>
                        <List.Header>{info[this.optionInfo.nameKey]}</List.Header>
                    </List.Content>
                </List.Item>
            ))
        })

        return content
    }

    render() {
        this.optionInfo = this.messageOptionInfo[this.props.messageOption]

        return (
            <Menu inverted vertical style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: '0em 0em' }}>
                <Dimmer active={this.props.isChatSidebarLoading && this.props.messageOption === MESSAGE_OPTIONS.CHATS}>
                    <Loader>Loading</Loader>
                </Dimmer>

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
                    <Input placeholder='Search...' icon='search' onChange={(e, v) => this.setState({ search: v['value'] })} />
                </Menu.Item>

                <PerfectScrollbar style={{ margin: '0em 1.5em', backgroundColor: '#1B1C1D' }}>
                    <List inverted selection verticalAlign='middle'>
                        {this.props.messageOption === MESSAGE_OPTIONS.FRIENDS && (
                            <List.Item onClick={() => this.props.setMessagingUrl('users', '@me')}>
                                <Image avatar placeholder />
                                <List.Content>
                                    <List.Header>YOU</List.Header>
                                </List.Content>
                            </List.Item>)}
                            
                        {this.optionInfo.generateContent()}
                    </List>
                </PerfectScrollbar>

                <Menu.Item>
                    <CreateModal optionInfo={this.optionInfo} />

                </Menu.Item>
            </Menu>
        )
    }

}

export default MessagingSideBar