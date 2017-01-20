import { connect } from 'react-redux';
import { createTrack } from '../../actions/track_actions';
import TrackCreateForm from './track_create';


const mapStateToProps = (state, ownProps) => {
  return{
    currentAlbum: state.currentAlbum,
    currentUser: state.session.currentUser,
    albumId: ownProps.params.albumId,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrack: track => dispatch(createTrack(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackCreateForm);
