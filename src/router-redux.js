import React from 'react'
import {render} from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, hashHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//////////// Reducers //////////

const incCount = (count=0, action) => (
  action.type == 'INC_COUNT' ? count + 1 : count
)

const incCountAction = () => ({type: 'INC_COUNT'})

// Add the reducer to your store on the `routing` key
const store = window.ReduxStore = createStore(
  combineReducers({
    count: incCount,
    routing: routerReducer
  })
)

/////////// Views ///////////

const App = ({location:{pathname}, children}) => (
  <div>
    <p>My location is {JSON.stringify(pathname)}</p>
    <div>
      <div><Link to="/">Go To Home</Link></div>
      <div><Link to="/counter">Go To Counter</Link></div>
    </div>
    <div>{children||'No Children'}</div>
  </div>
)

const _Counter = ({count, incCountAction}) => (
  <div>
    <p>The count is {count}</p>
    <button onClick={() => incCountAction()}>Increment!</button>
  </div>
)
const Counter = connect(
  ({count}) => ({count}),
  {incCountAction}
)(_Counter)


/////////////// ROUTING //////////////

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

const RoutingStructure = () => (
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="counter" component={Counter}/>
      </Route>
    </Router>
  </Provider>
)

////////////// MAIN RENDER ////////////
render(<RoutingStructure/>, document.getElementById('root'));
