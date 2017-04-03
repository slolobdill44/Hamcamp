import React from 'react';
import AccountInfo from './account_info';
import SearchBarContainer from './search_bar/search_bar_container';
import { Link, hashHistory } from 'react-router';
import ldClient from 'ldclient-js';

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerBackgroundColor: "#E6EBE0"
    }
  }

  componentDidMount() {
    console.log(this.props);

    let user = {
        "key": "aa0ceb",
        "firstName": "Ernestina"
    };

    let ldclient = ldClient.initialize('58e1714291c11e0962c37215', user);

    const that = this;

    ldclient.on('ready', function() {
      console.log("It's now safe to request feature flags");
      let showFeature = ldclient.variation("header-color");
      that.setState({headerBackgroundColor: `${showFeature}`});
    });
  }

  render () {

    return (
      <div style={{backgroundColor: this.state.headerBackgroundColor}}  className="splash-header">
        <section className="splash-left">
          <img className="splash-logo" src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_100/v1485153364/hamcamp_logo_200px_V2_jeifyy.png" />
          <div className="splash-left-text">
            <h2 className="splash-title">Hamcamp</h2>
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
