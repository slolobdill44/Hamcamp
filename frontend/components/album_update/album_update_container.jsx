import { connect } from 'react-redux';
import { fetchAlbum, updateAlbum } from '../../actions/album_actions';
import AlbumUpdateForm from './album_update';

const mapStateToProps = (state, ownProps) => ({
  currentAlbum: state.currentAlbum,
  albumId: ownProps.params.albumId,
  errors: state.errors,
  loading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
	updateAlbum: (album, id) => dispatch(updateAlbum(album, id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumUpdateForm);
