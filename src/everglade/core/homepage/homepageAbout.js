import React, { Component } from 'react'
import { Divider, Header, Grid, Card, Placeholder, Icon } from 'semantic-ui-react'

class HomepageAbout extends Component {

    aboutInfo = [{
        name: 'Mark JP Sanchez',
        education: 'Computer Science at UofT 2019-2023',
        description: 'Eat'
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
                    <Placeholder>
                        <Placeholder.Image square />
                    </Placeholder>
                    <Card.Content>
                        <Card.Header>{cardInfo.name}</Card.Header>
                        <Card.Meta>{cardInfo.education}</Card.Meta>
                        <Card.Description>{cardInfo.description}</Card.Description>
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
                    <Header as='h4' inverted>
                        <Icon name='user' />
                            About
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

export default HomepageAbout;