import React from 'react';
import AccountInfo from './account_info';
import SearchBarContainer from './search_bar/search_bar_container';
import { Link, hashHistory } from 'react-router';

class SplashHeader extends React.Component {

  render () {
    return (
      <div className="splash-header">
        <section className="splash-left">
          <img className="splash-logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/v1484161674/ham_rw5azp.png" />
          <div className="splash-left-text">
            <h2 className="splash-title">hamcamp</h2>
            <h4 className="splash-tagline">Discover quality cuts and the artists who slice them.</h4>
          </div>
        </section>
        <section className="splash-right">
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


export default SplashHeader;
