import { connect } from 'react-redux'
import { authorize } from '../actions/user'
import Dashboard from '../components/dashboard/Dashboard'

function mapStateToProps(state) {
  const { isLoggedIn } = state.user
  return {
    isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authorize: dispatch(authorize)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
