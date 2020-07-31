import React from 'react'
import { Card, List, Image, Button } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

const RequestSection = props => {

    const generateRequests = () => {

        
    }

    return (
        <Card style={{ flex: 1 }}>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <PerfectScrollbar >
                    <List celled>
                        <List.Item style={{ display: 'flex' }}>
                            <Image avatar placeholder />
                            <List.Content style={{ flex: 1, alignSelf: 'center' }}>
                                <List.Header>Poog</List.Header>
                            </List.Content>
                            <List.Content floated='right'>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Accept
                                    </Button>
                                    <Button basic color='red'>
                                        Decline
                                    </Button>
                                </div>
                            </List.Content>
                        </List.Item>
                    </List>
                </PerfectScrollbar>
            </Card.Content>
        </Card>
    )

}

export default RequestSection