import React from 'react';
import AccountInfo from './account_info';
import { Link } from 'react-router';

class SplashHeader extends React.Component {

  render () {
    return (
      <div className="header">
        <img className="logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/v1484161674/ham_rw5azp.png" />
        <h2 className="title">hamcamp</h2>
        <section className="splash-right">
          <input className='search-bar'></input>
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