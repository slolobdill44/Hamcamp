import { connect } from 'react-redux';
import { clearErrors } from '../../../actions/session_actions';
import AuthModalWrapper from './auth_modal_wrapper';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModalWrapper);
