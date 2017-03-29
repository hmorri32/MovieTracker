import App from './app';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (movie) => {
      dispatch(actions.addMovies(movie))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
