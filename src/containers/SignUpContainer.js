import { connect } from 'react-redux'
import SignUpPage from '../components/signUp/SignUpPage'
import { signUp } from '../actions/user'

function mapStateToProps(state) {
  const { auth } = state.user

  return {
    isUserLoggedIn: auth.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => {
      dispatch(signUp(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)
