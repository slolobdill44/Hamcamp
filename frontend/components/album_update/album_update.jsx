import React from 'react';
import { hashHistory } from 'react-router';

//give form props from edit button

class AlbumUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentAlbum;

    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    debugger;

    this.props.updateAlbum(formData, this.props.albumId)
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
                value={this.state.title}
                onChange={this.update('title')} />
            </label>

            <label className='album-art-upload'>Album Art:
              <input type='file' onChange={this.updateFile} />
            </label>

            <label>Description:
              <textarea
                className='album-description'
                type='text'
                value={this.state.description}
                onChange={this.update('description')} />
            </label>

            <input type='submit' value='Update Album' />
          </form>
        </section>
      </div>
    );
  }
}

export default AlbumUpdateForm;
