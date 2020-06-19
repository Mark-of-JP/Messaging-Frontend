import React, { Component } from 'react'
import { Divider, Header, Grid, Card, Image, Icon } from 'semantic-ui-react'

import { ContactInfo } from '../homepageInfo'

class HomepageContact extends Component {

    generateAboutCards = () => (ContactInfo.map(cardInfo => (
        <Grid.Column>
            <Card className="ui centered card" style={{height:'57em', width: '300px'}}>
                <div style={{ padding: '1em 1em' }}>
                    <Image src={cardInfo.image} size='medium' centered circular />
                </div>

                <Card.Content>
                    <Card.Header>{cardInfo.name}</Card.Header>
                    <Card.Meta>{cardInfo.education}</Card.Meta>
                    <Card.Description>{cardInfo.description}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>Links</Card.Meta>
                    <Card.Description>
                        <h5>Email:</h5>
                        {cardInfo.email}
                        <h5>LinkedIn: </h5>
                        <a href={cardInfo.linkedin}>{cardInfo.linkedin}</a>
                        <h5>GitHub: </h5>
                        <a href={cardInfo.github}>{cardInfo.github}</a></Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>)))

    render() {
        return (
            <div>
                <Divider horizontal inverted>
                    <Header as='h4' inverted style={{ fontSize: '2em' }}>
                        <Icon name='user' />
                            Contact
                    </Header>
                </Divider>

                <Grid columns={3}>
                    <Grid.Row>
                        {this.generateAboutCards()}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default HomepageContact;