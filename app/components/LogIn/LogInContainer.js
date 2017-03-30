import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions.js';
import LogIn from './LogIn.js';

const mapStateToProps = (state) => {
  return state
}


const mapDispatchToProps = (dispatch) => {

  return bindActionCreators(actions, dispatch)

};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);