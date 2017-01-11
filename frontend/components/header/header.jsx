import React from 'react';
import AccountInfo from './account_info';

class Header extends React.Component {

  render () {
    return (
      <div className="header">
        <img className="logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/v1484161674/ham_rw5azp.png" />
        <h2>Hamcamp Header</h2>
        <AccountInfo user={this.props.user} logout={this.props.logout} />
      </div>
    );
  }
}


export default Header;
