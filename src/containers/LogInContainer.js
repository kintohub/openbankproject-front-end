import { connect } from 'react-redux'
import LogIn from '../components/logIn/LogIn'
import { logIn } from '../actions/user'

function mapStateToProps(state) {
  const { auth } = state.user
  return {
    isUserLoggedIn: auth.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => {
      dispatch(logIn(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)
