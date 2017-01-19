import React from 'react';
import { hashHistory } from 'react-router';

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: null,
      description: ""
    };
  }

  update(field) {
  return (e) => {
    this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAlbum(this.state)
      .then((res) => {
        hashHistory.push(`/artists/${this.props.currentUser.id}`);
      });
  }

  render () {

    return (
      <div className='album-form-container'>
        <section className='album-form-info'>
          <h2 className='album-form-headers'>Create Album</h2>

          <form className='album-form' onSubmit={this.handleSubmit}>
            <label>Title:
              <input
                className='album-title'
                type="text"
                value={this.state.title}
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
                value={this.state.description}
                onChange={this.update('description')} />
            </label>

            <input type='submit' value='Create Album' />
          </form>
        </section>
        <section className='track-form-info'>
          <h2 className='album-form-headers'>Add Tracks</h2>
        </section>
      </div>
    );
  }
}

export default AlbumCreateForm;
