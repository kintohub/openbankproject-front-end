import { connect } from 'react-redux'
import { authorize } from '../actions/user'
import Dashboard from '../components/dashboard/Dashboard'

function mapStateToProps(state, props) {
  const { isLoggedIn } = state.user
  console.log(props)
  return {
    props,
    isLoggedIn
  }
}

export default connect(mapStateToProps)(Dashboard)
