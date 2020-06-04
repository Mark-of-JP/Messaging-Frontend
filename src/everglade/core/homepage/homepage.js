import React, { Component } from 'react'
import { Segment, Image, Grid, GridColumn, Visibility } from 'semantic-ui-react'

import HomepageHeader from './homepageHeader'
import HomepageAbout from './homepageAbout'
import HomepageContact from './homepageContact'

import EvergladeLogo from '../../common/images/logos/Everglade_Logo_1.jpg'

export default class Homepage extends Component {

    state = {
        visionState: 'home',
        home: {
            bottomPassed: false
        },
        about: {
            bottomPassed: false
        },
        contact: {
            bottomPassed: false
        },
    }

    handleScrollUpdate = (key, e, { calculations }) => this.setState({ [key]: calculations }, this.checkVisionState)
    checkVisionState = () => {
        var vision = 'home'

        if(this.state.about.bottomPassed)
            vision = 'contact'
        else if (this.state.home.bottomPassed)
            vision = 'about'

        this.setState({ visionState: vision })
    }

    render() {
        return (
            <div>
                <HomepageHeader visionState={this.state.visionState} />

                <Visibility offset={[0, 65]} onUpdate={(e, values) => this.handleScrollUpdate('home', e, values)}>
                    <Grid centered rows={2} verticalAlign='middle'>
                        <Grid.Row centered columns={2}>
                            <GridColumn>
                                <Image src={EvergladeLogo} fluid />
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Visibility>


                <Segment
                    inverted
                    vertical
                    style={{ padding: '1em 1em' }}>

                    <Visibility offset={[0, 50]} onUpdate={(e, values) => this.handleScrollUpdate('about', e, values)}>
                        <HomepageAbout />
                    </Visibility>

                    <Visibility offset={[0, 65]} onUpdate={(e, values) => this.handleScrollUpdate('contact', e, values)}>
                        <HomepageContact />
                    </Visibility>

                </Segment>
            </div>
        )
    }

}