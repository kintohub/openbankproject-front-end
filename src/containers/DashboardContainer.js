import { connect } from 'react-redux'
import Dashboard from '../components/dashboard/Dashboard'
import { signOut, authorize } from '../actions/user'
function mapStateToProps(state) {
  const { isLoggedIn } = state.user
  return {
    isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => {
      dispatch(signOut())
      dispatch(authorize())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
