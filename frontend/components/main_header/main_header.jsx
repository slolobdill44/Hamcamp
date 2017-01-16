import React from 'react';
import AccountInfo from '../splash_header/account_info';
import { Link } from 'react-router';

class MainHeader extends React.Component {

  render () {
    return (
      <div className="main-header">
        <Link to="/">
          <img className="main-logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/v1484161674/ham_rw5azp.png" />
          <h2 className="main-title">hc</h2>
        </Link>
        <section className="main-nav-right">
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
