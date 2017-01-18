import { connect } from 'react-redux';
import {  } from '../../../actions/session_actions';
import SearchBar from './search_bar';


const mapStateToProps = ({ session }) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
