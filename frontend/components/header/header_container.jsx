import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    console.log("logout action");
    dispatch(logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
