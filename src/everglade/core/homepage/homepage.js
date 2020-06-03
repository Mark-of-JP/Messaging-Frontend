import React, { Component } from 'react'
import { Segment, Image, Grid, GridColumn} from 'semantic-ui-react'

import HomepageHeader from './homepageHeader'
import HomepageAbout from './homepageAbout'

import EvergladeLogo from '../../common/images/logos/Everglade_Logo_1.jpg'

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
                    style={{ padding: '1em 1em' }}>

                    <HomepageAbout />

                </Segment>
            </div>
        )
    }

}