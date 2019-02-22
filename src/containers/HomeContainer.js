import { connect } from 'react-redux'
import Home from '../components/home/Home'

function mapStateToProps(state) {
  const { user } = state
  const details = user.details ? user.details : {}

  const isLoggedIn = user.auth.isLoggedIn
  return {
    ...state,
    isLoggedIn,
    details
  }
}

export default connect(mapStateToProps)(Home)
