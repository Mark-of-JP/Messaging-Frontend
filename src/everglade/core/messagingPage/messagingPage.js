import React, { Component } from 'react'

import MessagingSideBar from '../../common/components/messagingSideBar'



class MessagingPage extends Component {

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>
                
                <MessagingSideBar />

                <div style={{flex:3, backgroundColor:'blue'}}>

                </div>
            </div>
        )
    }

}

export default MessagingPage