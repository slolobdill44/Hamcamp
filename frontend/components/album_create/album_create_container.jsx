import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumCreateForm from './album_create';


const mapStateToProps = ({ currentAlbum }, ownProps) => {
    return {
      albumId: ownProps.params.albumId,
      currentAlbum
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
