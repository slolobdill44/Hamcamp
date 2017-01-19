import React from 'react';
import { hashHistory } from 'react-router';

//give form props from edit button

class AlbumUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: {
        title: "",
        description: ""
      }
    };
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId)
      .then(() => {
        this.setState({
          currentAlbum: this.props.currentAlbum,
        });
      });
  }

  update(field) {
  return (e) => {
    this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateAlbum(this.state)
      .then((res) => {
        hashHistory.push(`/albums/${this.props.albumId}`);
      });
  }

  render () {

    return (
      <div className='album-form-container'>
        <section className='album-form-info'>
          <h2 className='album-form-headers'>Edit Album</h2>

          <form className='album-form' onSubmit={this.handleSubmit}>
            <label>Title:
              <input
                className='album-title'
                type="text"
                value={this.state.currentAlbum.title}
                onChange={this.update('title')} />
            </label>

            <label>Album Art:
              <button
                className='album-art-upload'
                value='Upload Image'>Upload Image</button>
            </label>

            <label>Description:
              <textarea
                className='album-description'
                type='text'
                value={this.state.currentAlbum.description}
                onChange={this.update('description')} />
            </label>

            <input type='submit' value='Update Album' />
          </form>
        </section>
        <section className='track-form-info'>
          <h2 className='album-form-headers'>Edit/Add Tracks</h2>
        </section>
      </div>
    );
  }
}

export default AlbumUpdateForm;
