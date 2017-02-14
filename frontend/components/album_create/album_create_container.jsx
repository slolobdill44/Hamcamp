import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
import AlbumCreateForm from './album_create';


const mapStateToProps = (state) => {
  return{
    currentUser: state.session.currentUser,
    loading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAlbum: album => dispatch(createAlbum(album))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateForm);
