import React from 'react';
import LoadingSpinner from '../loading_spinner';
import { hashHistory } from 'react-router';

//give form props from edit button

class AlbumUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentAlbum;

    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId)
      .then(() => {
        this.setState(this.props.currentAlbum);
      });
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
      this.setState({ image: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("album[title]", this.state.title);
    if (this.state.image !== this.props.currentAlbum.image) {
      formData.append("album[image]", this.state.image);
    }
    formData.append("album[description]", this.state.description);

    this.props.updateAlbum(formData, this.props.albumId)
      .then((res) => {
        hashHistory.push(`/albums/${this.props.albumId}`);
      });
  }

  handleDelete() {
    const currentUserId = this.props.currentAlbum.artist.id;

    this.props.deleteAlbum(this.props.albumId)
      .then((res) => {
        hashHistory.push(`/artists/${currentUserId}`);
      });
  }

  render () {

    if (this.props.loading.isLoading) {
      return <section className='album-form-container'><LoadingSpinner /></section>;
    }

    return (
      <div className='album-form-container'>
        <section className='album-form-info'>


          <form className='album-form' onSubmit={() => this.handleSubmit()}>
            <h2 className='album-form-headers'>Edit Album</h2>

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

            <div className='album-update-buttons'>
              <input className='album-submit-button' type='submit' value='Update' />
              <div className='album-delete-button' onClick={() => this.handleDelete()}>Delete Album</div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default AlbumUpdateForm;
