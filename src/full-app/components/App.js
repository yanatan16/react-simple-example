import React from 'react'
import {Link} from 'react-router'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const AppMenu = ({pathname}) => (
  <Menu inverted pointing secondary size='large'>
    <Menu.Item as={Link} to='/' active={pathname === '/'}>Home</Menu.Item>
    <Menu.Item as={Link} to='/counter' active={pathname === '/counter'}>Counter</Menu.Item>
  </Menu>
)

const Masthead = ({pathname}) => (
  <Segment
    inverted
    textAlign='center'
    style={{ minHeight: 300, padding: '1em 0em' }}
    vertical
    >
    <Container>
      <AppMenu pathname={pathname}/>
    </Container>

    <Container text>
      <Header
        as='h1'
        content='Counter'
        inverted
        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0em' }}
        />
      <Header
        as='h2'
        content='Count to infinity and beyond.'
        inverted
        style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
      <Button primary size='huge' as={Link} to='/counter'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  </Segment>
)

export const App = ({location:{pathname}, children}) => (
  <div>
    <Masthead pathname={pathname}/>
    {children}
  </div>
)
