import MovieGrid from './MovieGrid';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps, null)(MovieGrid);
