import React from 'react'
import {connect} from 'react-redux'

import {incCountAction} from '../reducers'

import { Header, Grid, Container, Button } from 'semantic-ui-react'

const _Counter = ({count, incCountAction}) => (
  <Container>
    <Grid>
      <Grid.Row columns={2} style={{marginTop: '4em'}}>
        <Grid.Column>
          <Header as='h2'>The count is {count}</Header>
        </Grid.Column>
        <Grid.Column floated='right'>
          <Button color="green" onClick={() => incCountAction()}>Increment!</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export const Counter = connect(
  ({data:{count}}) => ({count}),
  {incCountAction}
)(_Counter)
