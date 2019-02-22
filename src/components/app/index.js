import React from 'react'
import { Route } from 'react-router-dom'
import DashboardContainer from '../../containers/DashboardContainer'

const App = () => <Route render={props => <DashboardContainer {...props} />} />

export default App
