import React from 'react';
import LoadingSpinner from '../loading_spinner';
import { hashHistory } from 'react-router';

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      imageFile: null,
      description: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("album[title]", this.state.title);
    formData.append("album[description]", this.state.description);
    formData.append("album[image]", this.state.imageFile);

    this.props.createAlbum(formData)
      .then((res) => {
        hashHistory.push(`/artists/${this.props.currentUser.id}`);
      });
  }

  render () {

    if (this.props.loading.isLoading) {
      return <section className='album-form-container'><LoadingSpinner /></section>;
    }

    return (
      <div className='album-form-container'>
        <section className='album-form-info'>


          <form className='album-form' onSubmit={this.handleSubmit}>
            <h2 className='album-form-headers'>Create Album</h2>

            <div className='album-form-inputs'>
              <div>
                <div  className='form-data-type'>
                  Title:
                </div>
                <label>
                  <input
                    className='album-title'
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Album Title" />
                </label>
              </div>
              <br />

              <div>
                <div className='form-data-type'>
                  Album Art:
                </div>
                <label className='album-art-upload'>
                  <input type='file' onChange={this.updateFile} />
                </label>
                <img src={this.state.imageUrl} />
              </div>

              <div>
                <div className='form-data-type'>
                  Description:
                </div>
                <label>
                  <textarea
                    className='album-description'
                    type='text'
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="(optional)" />
                </label>
              </div>
            </div>

              <input className='album-submit-button' type='submit' value='Create Album' />
          </form>
        </section>
      </div>
    );
  }
}

export default AlbumCreateForm;
