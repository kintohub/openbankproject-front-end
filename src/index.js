import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import AppContainer from './containers/AppContainer'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <AppContainer />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
