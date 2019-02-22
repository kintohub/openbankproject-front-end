import { connect } from 'react-redux'
import LogIn from '../components/logIn/LogIn'
import { logIn } from '../actions/user'

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => {
      dispatch(logIn(data))
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(LogIn)
