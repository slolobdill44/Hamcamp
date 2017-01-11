import React from 'react';
import Modal from 'react-modal';
import AuthModalContainer from './auth_modal_container';

class AuthModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.75)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        width : 375,
        height: 310,
        margin: '0 auto',
        top: '20%',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11
      }
    };

    return (
      <div>
        <button onClick={this.openModal}>Login/Signup</button>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          style={style}
          onRequestClose={this.closeModal}>

          <AuthModalContainer />
        </Modal>
      </div>
    );
  }
}

export default AuthModalWrapper;
