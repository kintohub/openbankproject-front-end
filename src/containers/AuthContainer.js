import { connect } from 'react-redux'
import Auth from '../components/auth/Auth'
import { authorize } from '../actions/user'

function mapStateToProps(state, props) {
  console.log(props, 'auth')
  return {
    props,
    token: state.user.token
  }
}

export default connect(
  mapStateToProps,
  {
    authorize
  }
)(Auth)
