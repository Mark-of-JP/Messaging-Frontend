import React, { Component } from 'react'
import { Divider, Header, Card, Image, Icon, Button } from 'semantic-ui-react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { ContactInfo } from '../homepageInfo'

/**
 * The contact section on a thin window
 */
class HomepageContact extends Component {

    generateAboutCards = () => (ContactInfo.map(cardInfo => (
        <Slide>
            <Card className="ui centered card" style={{ width: '400px', height:'57em'}}>
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
        </Slide>)))

    render() {
        return (
            <div >
                <Divider horizontal inverted>
                    <Header as='h4' inverted style={{ fontSize: '2em' }}>
                        <Icon name='user' />
                            Contact
                    </Header>
                </Divider>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>


                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={70}
                        totalSlides={3}
                        style={{ paddingTop: '1em', width: '1020px' }}
                    >

                        <Slider style={{ paddingBottom: '4em' }}>
                            {this.generateAboutCards()}
                        </Slider>
                        <Button as={ButtonBack}>Back</Button>
                        <Button as={ButtonNext}>Next</Button>
                    </CarouselProvider>
                </div>



            </div>
        )
    }
}

export default HomepageContact;