import React from 'react'
import { Card, List, Image, Button } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

const RequestSection = props => {

    const generateRequests = () => {

        if (props.isLoading)
            return (<div></div>)

        return props.requestUIDs.map(uid => {
            const info = props.cachedValues[uid]

            return (
                <List.Item key={uid} style={{ display: 'flex' }}>
                    <Image avatar placeholder />
                    <List.Content style={{ flex: 1, alignSelf: 'center' }}>
                        <List.Header>{info[props.requestNameKey]}</List.Header>
                    </List.Content>
                    <List.Content floated='right'>
                        <div className='ui two buttons' >
                            <Button basic color='green' onClick={() => props.acceptRequest(uid)}>
                                Accept
                                    </Button>
                            <Button basic color='red' onClick={() => props.declineRequest(uid)}>
                                Decline
                                    </Button>
                        </div>
                    </List.Content>
                </List.Item>
            )
        })
    }

    return (
        <Card style={{ flex: 1 }}>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <PerfectScrollbar >
                    <List celled>
                        {generateRequests()}
                    </List>
                </PerfectScrollbar>
            </Card.Content>
        </Card>
    )

}

export default RequestSection