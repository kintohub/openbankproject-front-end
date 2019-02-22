import { connect } from 'react-redux'
import Dashboard from '../components/dashboard/Dashboard'

function mapStateToProps(state) {
  const { isLoggedIn } = state.user
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(Dashboard)
