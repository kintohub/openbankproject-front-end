import { connect } from 'react-redux'
import { authorize } from '../actions/user'
import App from '../components/app'

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
)(App)
