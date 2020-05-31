import React, { Component } from 'react'

import HomepageHeader from '../common/components/homepageHeader'
import { Segment, Image, Grid, GridColumn, Divider, Header, Icon } from 'semantic-ui-react'

import EvergladeLogo from '../common/images/logos/Everglade_Logo_1.jpg'

export default class Homepage extends Component {

    render() {
        return (
            <div>
                <HomepageHeader />
                <Grid centered rows={2} verticalAlign='middle'>
                    <Grid.Row centered columns={2}>
                        <GridColumn>
                            <Image src={EvergladeLogo} fluid />
                        </GridColumn>
                    </Grid.Row>
                </Grid>

                <Segment 
                inverted
                vertical
                style={{padding:'1em 1em'}}>
                <Divider horizontal inverted>
                    <Header as='h4' inverted>
                        <Icon name='user' />
                            About
                    </Header>
                </Divider>
                <p>
                    Eat Nut 6
                    Eat nut 8
                </p>
                <tr/>
                <p>eat nut 12</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                <tr/>
                <p>Long test</p>
                </Segment>
            </div>
        )
    }

}