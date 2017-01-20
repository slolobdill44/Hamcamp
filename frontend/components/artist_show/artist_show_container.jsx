import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAllAlbums } from '../../actions/album_actions';
import ArtistShow from './artist_show';


const mapStateToProps = ({ artist }, ownProps) => {
    return {
      artistId: ownProps.params.artistId,
      artist: artist.currentArtist,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId))  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
