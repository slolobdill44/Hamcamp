import { connect } from 'react-redux';
import { searchArtists } from '../../../actions/artist_actions';
import SearchBar from './search_bar';


const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchArtists: query => dispatch(searchArtists(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
