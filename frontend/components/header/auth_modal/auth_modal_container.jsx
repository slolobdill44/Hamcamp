import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionForm from './auth_modal';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  let processForm = signup;
  if (formType === 'login') {
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
)(SessionForm);