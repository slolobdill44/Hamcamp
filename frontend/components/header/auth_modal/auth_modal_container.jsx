import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import AuthModal from './auth_modal';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.formType;
  let processForm = signup;
  if (formType === "login") {
    processForm = login;
  }

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);
