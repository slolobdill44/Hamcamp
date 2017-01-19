import { connect } from 'react-redux';
import { fetchAlbum, updateAlbum } from '../../actions/album_actions';
import AlbumUpdateForm from './album_update';

const mapStateToProps = (state, ownProps) => ({
  currentAlbum: state.currentAlbum,
  albumId: ownProps.params.albumId,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
	updateAlbum: album => dispatch(updateAlbum(album))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumUpdateForm);
