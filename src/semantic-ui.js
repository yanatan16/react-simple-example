// Styles
import 'semantic-ui-css/semantic.css'

import React from 'react'
import {render} from 'react-dom'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react'


const AppMenu = () => (
  <Menu inverted pointing secondary size='large'>
    <Menu.Item as='a' active>Home</Menu.Item>
    <Menu.Item as='a'>Work</Menu.Item>
    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>
  </Menu>
)

const Masthead = ({pathname}) => (
  <Segment
    inverted
    textAlign='center'
    style={{ minHeight: 700, padding: '1em 0em' }}
    vertical
    >
    <Container>
      <AppMenu />
    </Container>

    <Container text>
      <Header
        as='h1'
        content='Imagine-a-Company'
        inverted
        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
        />
      <Header
        as='h2'
        content='Do whatever you want when you want to.'
        inverted
        style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
      <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  </Segment>
)

const HomePageSection1 = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='https://react.semantic-ui.com/assets/images/wireframe/white-image.png'
              />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
)

const App = () => (
  <div>
    <Masthead/>
    <HomePageSection1/>
  </div>
)

render(<App/>, document.getElementById('root'));
