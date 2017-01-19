import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumCreateForm from './album_create';


const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
