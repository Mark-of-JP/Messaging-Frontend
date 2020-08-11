import React, { Component } from 'react'
import { Divider, Icon, Menu, Sidebar } from 'semantic-ui-react'

import MessagingSideBar from './messagingSideBar'
import MessagingMain from './messagingMain'

/**
 * Contains the logic for display for the messaging page
 */
class MessagingView extends Component {

    state = {
        width: 0,
        height: 0,
        visible: false
    }

    setVisible = isVisible => this.setState({ visible: isVisible })

    //Used to update the state whenever the window resizes
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
    updateWindowDimensions = () => {
        console.log(window.innerWidth)
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    isMobileWidth = () => this.state.width < 925

    render() {

        console.log(this.state.visible)

        if (!this.isMobileWidth())
            return (
                <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw' }}>

                    <MessagingSideBar
                        forceUpdate={this.props.forceUpdate}
                        friendsInfo={this.props.friendsInfo}
                        chatsInfo={this.props.chatsInfo}
                    />

                    <div style={{ flex: 0.1, position: 'relative' }}>
                        <Divider inverted vertical>
                            <Icon name='leaf' />
                        </Divider>
                    </div>


                    <MessagingMain
                        forceUpdate={this.props.forceUpdate}
                        messageOption={this.props.messageOption}
                        selectedUID={this.props.selectedUID}
                        urlOption={this.props.urlOption}
                        friendsInfo={this.props.friendsInfo} />
                </div>
            )
        else
            return (
                <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw' }}>

                    <Menu
                        inverted
                        pointing
                        secondary={false}
                        size='large'>
                        <Menu.Item as='a' onClick={() => this.setVisible(true)}>
                            <Icon name='bars' size='large' />
                        </Menu.Item>
                    </Menu>

                    <Sidebar.Pushable>
                        <Sidebar
                            onHide={() => this.setVisible(false)}
                            visible={this.state.visible}
                        >
                            <MessagingSideBar
                                forceUpdate={this.props.forceUpdate}
                                friendsInfo={this.props.friendsInfo}
                                chatsInfo={this.props.chatsInfo}
                            />
                        </Sidebar>

                        <Sidebar.Pusher>
                            <div style={{display: 'center', alignContent: 'center', justifyContent:'center'}}>
                            <MessagingMain
                                forceUpdate={this.props.forceUpdate}
                                messageOption={this.props.messageOption}
                                selectedUID={this.props.selectedUID}
                                urlOption={this.props.urlOption}
                                friendsInfo={this.props.friendsInfo} />
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            )
    }
}

export default MessagingView