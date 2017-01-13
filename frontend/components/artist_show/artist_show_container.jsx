import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';


const mapStateToProps = ({ artist }, ownProps) => {
  const id = ownProps.params.artistId;
  return {
    id
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
