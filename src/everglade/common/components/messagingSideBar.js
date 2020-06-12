import React, { Component } from 'react'
import { List, Image, Menu, Dropdown, Input } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

class MessagingSideBar extends Component {

    generateListContent = (num) => {
        var content = []

        for (var i = 0; i < num; i++) {
            content.push(<List.Item>
                <Image avatar placeholder />
                <List.Content>
                    <List.Header>Friend #{i + 1}</List.Header>
                </List.Content>
            </List.Item>)
        }

        return content
    }

    render() {
        return (
            <Menu inverted fixed='left' vertical style={{ display: 'flex', flexDirection: 'column' }} size='large'>
                <Menu.Item>
                    <Dropdown text="Friends"
                        inline
                        fluid
                        style={{ flex: 1 }}
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item text="Friends" />
                            <Dropdown.Item text="Chats" />
                            <Dropdown.Item text="Settings" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item>
                    <Input placeholder='Search...' icon='search' />
                </Menu.Item>

                <PerfectScrollbar style={{ flex: 12, height: '100%', backgroundColor: '#1B1C1D' }}>
                    <List inverted selection verticalAlign='middle'>
                        {this.generateListContent(30)}
                    </List>
                </PerfectScrollbar>

                <Menu.Item>
                    <div style={{ flex: 1, backgroundColor: 'purple' }} />
                </Menu.Item>
            </Menu>
        )
    }

}

export default MessagingSideBar