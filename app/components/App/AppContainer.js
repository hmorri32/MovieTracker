import App from './app';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
