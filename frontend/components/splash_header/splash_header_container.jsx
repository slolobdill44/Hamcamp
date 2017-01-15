import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import SplashHeader from './splash_header';


const mapStateToProps = state => {
  return { user: state.session.currentUser };
};

const mapDispatchToProps = dispatch => ({
  logout: () =>  dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashHeader);
