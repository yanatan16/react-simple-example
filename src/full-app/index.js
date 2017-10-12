import React from 'react'
import {render} from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, hashHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// App specific Stuff
import {reducers} from './reducers'
import {App} from './components/App'
import {Counter} from './components/Counter'

// Styles
import 'semantic-ui-css/semantic.css'

// Add the reducer to your store on the `routing` key
const store = window.ReduxStore = createStore(
  combineReducers({
    data: reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

const RoutingStructure = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="counter" component={Counter}/>
      </Route>
    </Router>
  </Provider>
)

////////////// MAIN RENDER ////////////
render(<RoutingStructure/>, document.getElementById('root'));
