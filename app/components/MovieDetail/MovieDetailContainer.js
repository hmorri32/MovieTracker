import MovieDetail from './MovieDetail';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(MovieDetail)
