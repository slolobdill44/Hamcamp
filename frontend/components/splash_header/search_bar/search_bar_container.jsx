import { connect } from 'react-redux';
import { searchArtists } from '../../../actions/artist_actions';
import SearchBar from './search_bar';


const mapStateToProps = ({ artist }) => ({
  searchResults: artist.searchResults
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
