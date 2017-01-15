import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';


const mapStateToProps = ({ artist }, ownProps) => {
    return {
      artistId: ownProps.params.artistId,
      artist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps.params.artistId);
  return {
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
