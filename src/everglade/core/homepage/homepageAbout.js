import React, { Component } from 'react'
import { Divider, Header, Icon, Container, Image, Grid } from 'semantic-ui-react'

import { ReactLogo, HerokuLogo, FlaskLogo, FirebaseLogo } from '../../common/images/logos'

const technologyInfo = [
    {
        image: ReactLogo,
        name: 'React.js',
        description: 'React is a popular frontend framework developed by Facebook. React is used for the frontend of our application and is currently being used to display this page.'
    },
    {
        image: HerokuLogo,
        name: 'Heroku',
        description: 'Heroku is a platform that allows developers to develop and deploy their online web apps. Heroku is being used to host the React frontend of our application and our Python Flask backend.'
    },
    {
        image: FlaskLogo,
        name: 'Flask',
        description: 'Flask is a python web application framework that is being used for the backend of our application. We are using Flask for our REST API as well as for our websockets.'
    },
    {
        image: FirebaseLogo,
        name: 'Google Firebase',
        description: "Firebase is Google's mobile platform. It is where our database is and it handles our authentication is also being handled by Firebase."
    }
]

/**
 * The about section of a window
 */
class HomepageAbout extends Component {

    generateTechnologyInfo = (image, title, message, isRight) => {
        var left = (
        <Grid.Column floated='left' width={6}>
            <Image bordered rounded size='large' src={image} centered/>
        </Grid.Column>
        )

        var right = (<Grid.Column width={8}>
            <Header inverted as='h3' style={{ fontSize: '2em' }}>
                {title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                {message}
            </p>
        </Grid.Column>)

        if (isRight) {
            left = (<Grid.Column width={8}>
                <Header inverted as='h3' style={{ fontSize: '2em' }}>
                    {title}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    {message}
                </p>
            </Grid.Column>)

            right = (<Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={image} centered />
            </Grid.Column>)
        }

        return (
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    {left}
                    {right}
                </Grid.Row>
            </Grid>
        )
    }

    generateTechnologyList = () => (technologyInfo.map((techInfo, index) => this.generateTechnologyInfo(techInfo.image, techInfo.name, techInfo.description, index % 2 !== 0)))

    render() {
        return (
            <div style={{ marginBottom: '3em'}}>
                <Divider horizontal inverted>
                    <Header as='h4' inverted style={{ fontSize: '2em' }}>
                        <Icon name='cogs' />
                            About
                    </Header>
                </Divider>

                <Container style={{padding:'3em 0em'}}>
                    <p style={{ fontSize: '1.33em' }}>
                        Everglade Messaging is an online messaging web app which was created and designed as a side project. Both the backend and the frontend of the application were created by three developers.
                        Front-end code can be found here: <a href={'https://github.com/Mark-of-JP/Messaging-Frontend'}>https://github.com/Mark-of-JP/Messaging-Frontend</a>.
                        Back-end code can be found here: <a href={'https://github.com/Mark-of-JP/Messaging-Api'}>https://github.com/Mark-of-JP/Messaging-Api</a>.
                        The technology that was used is as follows:
                    </p>
                </Container>

                {this.generateTechnologyList()}

            </div>
        )
    }
}

export default HomepageAbout;