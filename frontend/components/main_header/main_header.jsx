import React from 'react';
import AccountInfo from '../splash_header/account_info';
import SearchBarContainer from '../splash_header/search_bar/search_bar_container';
import { Link } from 'react-router';
import ldClient from 'ldclient-js';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerBackgroundColor: "#E6EBE0"
    }
  }

  componentDidMount() {
    // console.log(this.props);

    let user = {
        "key": "aa0ceb",
        "firstName": this.props.user.username
    };
    console.log(user);

    let ldclient = ldClient.initialize('58e1714291c11e0962c37215', user);

    const that = this;

    ldclient.on('ready', function() {
      console.log("It's now safe to request feature flags");
      let showFeature = ldclient.variation("header-color");
      console.log(showFeature);
      that.setState({headerBackgroundColor: `${showFeature}`});
    });
  }


  render () {
    // console.log(this.props.user);
    const logoLink = this.props.user === null ? '/' : `/artists/${this.props.user.id}`;

    return (
      <div style={{backgroundColor: this.state.headerBackgroundColor}} className="main-header">
        <div className="main-nav-left">
          <Link to={logoLink}>
            <img className="main-logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,h_37/v1485154475/hamcamp_logo_100px_V2_drto1u.png" />
            <h2 className="main-title">hc</h2>
          </Link>
        </div>
        <div className="main-nav-right">
          <SearchBarContainer />
          <AccountInfo
            user={this.props.user}
            login={this.props.login}
            logout={this.props.logout} />
        </div>
      </div>
    );
  }
}


export default MainHeader;
