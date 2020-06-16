import React, { Component } from 'react'
import { Divider, Header, Grid, Card, Image, Icon } from 'semantic-ui-react'

import { MarkJP } from '../../common/images/developers'

class HomepageContact extends Component {

    aboutInfo = [{
        name: 'Mark JP Sanchez',
        education: 'Data Science and Computer Science at UofT 2019-2023',
        description: 'I have been programming for the past 6 years of my life and the more I learn the more I realize that there is still so much more to learn. I love new technologies and concepts and I am excited to see where my future takes me.',
        image: MarkJP,
        email: 'mark.of.sanchez@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mark-of-jp-5406/',
        github: 'https://github.com/DarkLordCentury'
    }, {
        name: 'Jakub Wozniak',
        education: 'Computer Science at UofG 2019-2023',
        description: 'Nut'
    }, {
        name: 'Carmello Restivo-Cuck',
        education: 'Computer Science at UofT 2019-2023',
        description: '12'
    }]

    generateAboutCards = () => {
        var cards = []

        for (var i = 0; i < this.aboutInfo.length; i++) {
            var cardInfo = this.aboutInfo[i]

            cards.push(<Grid.Column>
                <Card className="ui centered card">
                    <div style={{padding:'1em 1em'}}>
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
            </Grid.Column>)
        }

        return cards
    }

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