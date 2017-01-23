import React from 'react';
import AccountInfo from '../splash_header/account_info';
import SearchBarContainer from '../splash_header/search_bar/search_bar_container';
import { Link } from 'react-router';

class MainHeader extends React.Component {

  render () {
    const logoLink = this.props.user ? `/artists/${this.props.user.id}` : `/`;

    return (
      <div className="main-header">
        <Link to={logoLink}>
          <img className="main-logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,h_37/v1485154475/hamcamp_logo_100px_V2_drto1u.png" />
          <h2 className="main-title">hc</h2>
        </Link>
        <section className="main-nav-right">
          <SearchBarContainer />
          <AccountInfo
            user={this.props.user}
            login={this.props.login}
            logout={this.props.logout} />
        </section>
      </div>
    );
  }
}


export default MainHeader;
