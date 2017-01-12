import React from 'react';
import AuthModalContainer from './auth_modal_container';
import { Link, withRouter } from 'react-router';

class AuthModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          username: "",
          password: "",
        formType: this.props.formType
      };
      this.formType = this.props.formType;
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  	componentDidUpdate() {
      if (this.state.formType === 'login') {
  		    this.redirectIfLoggedIn();
      }
  	}

  	redirectIfLoggedIn() {
  		if (this.props.loggedIn) {
  			this.props.router.push("/");
  		}
  	}

  	update(field) {
  		return e => this.setState({
  			[field]: e.currentTarget.value
  		});
  	}

  	handleSubmit(e) {
  		e.preventDefault();
  		const user = this.state;
  		this.props.processForm({user});
  	}

  	navLink() {
  		if (this.state.formType === "login") {
        this.setState({formType: 'signup'});
  		} else {
  			this.setState({formType: 'login'});
  		}
  	}

  	renderErrors() {
  		return(
  			<ul>
  				{this.props.errors.map((error, i) => (
  					<li key={`error-${i}`}>
  						{error}
  					</li>
  				))}
  			</ul>
  		);
  	}

  render() {
    const text = this.state.formType === 'login' ? 'Login' : 'Create Account';
    const flavorText = this.state.formType  === 'login' ? 'Don\'t have an account?' : 'Already have an account?';
    const otherFormType = this.state.formType === 'login' ? 'Create an account' : 'Login';

    return (
      <div className="login-form-container">

        <h2 className="login-form-header">{text}</h2>

				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>

					{this.renderErrors()}
						<br/>
            <div className="login-boxes">
              <label className="login-section"> Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input" />
              </label>
              <br/>
              <br/>

              <label className="login-section"> Password:
                <input type="text"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input" />
              </label>
						<br/>
            <br/>
						<input className="login-button" type="submit" value={text} />
					</div>
				</form>

        {flavorText} <a className="login-link" onClick={() => this.navLink()}>{otherFormType} instead</a>
			</div>
    );
  }
}

export default AuthModal;
