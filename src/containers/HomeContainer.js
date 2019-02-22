import { connect } from 'react-redux'
import Home from '../components/home/Home'

function mapStateToProps(state) {
  const { user } = state

  const isLoggedIn = user.auth.isLoggedIn
  console.log(user)
  return {
    ...state,
    isLoggedIn
  }
}

export default connect(mapStateToProps)(Home)
