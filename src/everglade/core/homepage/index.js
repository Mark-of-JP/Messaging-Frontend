import React, { Component } from 'react'
import { Segment, Image, Visibility } from 'semantic-ui-react'

import HomepageAbout from './homepageAbout'
import { DesktopHeader, DesktopContact } from './desktop'
import { MobileHeader } from './mobile'

import { EvergladeLogo } from '../../common/images/logos'

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
        width: 0,
        height: 0
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    isMobileWidth = () => this.state.width <= 850 //570
    isMobileHeaderWidth = () => this.state.width <= 570

    handleScrollUpdate = (key, e, { calculations }) => this.setState({ [key]: calculations }, this.checkVisionState)
    checkVisionState = () => {
        var vision = 'home'

        if (this.state.about.bottomPassed)
            vision = 'contact'
        else if (this.state.home.bottomPassed)
            vision = 'about'

        this.setState({ visionState: vision })
    }

    render() {

        const HomepageHeader = this.isMobileHeaderWidth() ? MobileHeader : DesktopHeader

        return (
            <div>
                <HomepageHeader visionState={this.state.visionState} >

                <section id='home'>
                    <Visibility style={{backgroundColor:'white'}} offset={[0, 65]} onUpdate={(e, values) => this.handleScrollUpdate('home', e, values)}>
                        <Image placeholder src={EvergladeLogo} size='huge' fluid centered />
                    </Visibility>
                </section>



                <Segment
                    inverted
                    vertical
                    style={{ padding: '1em 1em' }}>

                    <section id='about'>
                        <Visibility offset={[0, 80]} onUpdate={(e, values) => this.handleScrollUpdate('about', e, values)}>
                            <HomepageAbout />
                        </Visibility>
                    </section>

                    <section id='contact'>
                        <Visibility offset={[0, 50]} onUpdate={(e, values) => this.handleScrollUpdate('contact', e, values)}>
                            <DesktopContact />
                        </Visibility>
                    </section>

                </Segment>

                </HomepageHeader>
            </div>
        )
    }

}