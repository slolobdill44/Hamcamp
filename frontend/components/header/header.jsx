import React from 'react';
import AccountInfo from './account_info';

class Header extends React.Component {

  render () {
    console.log(this.props.user);
    console.log(this.props.logout);

    return (
      <div className="header">
        <img></img>
        <h2>Hamcamp Header</h2>
        <AccountInfo className="account-info" user={this.props.user} logout={this.props.logout} />
      </div>
    );
  }
}


export default Header;
