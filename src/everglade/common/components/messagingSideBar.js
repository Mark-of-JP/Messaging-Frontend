import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

class MessagingSideBar extends Component {

    generateListContent = (num) => {
        var content = []

        for(var i = 0; i < num; i++) {
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
            <div style={{ flex: 1, display: 'flex', height: '100%', flexDirection: 'column' }}>
                <div style={{ flex: 1, backgroundColor:'green' }} />
                <PerfectScrollbar style={{ flex: 12, height: '100%', backgroundColor:'#1B1C1D' }}>
                    <List inverted selection verticalAlign='middle'>
                        {this.generateListContent(30)}
                    </List>
                </PerfectScrollbar>
                <div style={{ flex: 1, backgroundColor: 'purple' }} />
            </div>
        )
    }

}

export default MessagingSideBar