import { connect } from 'react-redux'
import SignUpPage from '../components/signUp/SignUpPage'
import { signUp } from '../actions/user'

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => {
      dispatch(signUp(data))
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(SignUpPage)
