import React from 'react';
import AccountInfo from './account_info';

class Header extends React.Component {

  render () {
    console.log(this.props);
    return (
      <div className="header">
        <img></img>
        <h2>Header</h2>
        <AccountInfo user={this.props.user} logout={this.props.logout} />
      </div>
    );
  }
}


export default Header;
