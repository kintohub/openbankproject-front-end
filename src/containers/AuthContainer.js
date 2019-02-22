import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Auth from '../components/auth/Auth'
import { authorize, getUser } from '../actions/user'

function mapStateToProps(state, props) {
  const { user } = state

  const isLoggedIn = user.auth.isLoggedIn
  return {
    props,
    isLoggedIn,
    token: state.user.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    redirectToLogIn: () => dispatch(push('/log-in')),
    authorize: () => dispatch(authorize()),
    getUser: () => dispatch(getUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
