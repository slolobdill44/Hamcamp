import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: {
        tracks: []
      }
    };
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId).then(() => {
      this.setState({currentAlbum: this.props.album});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.albumId !== nextProps.params.albumId ) {

      this.props.fetchAlbum(nextProps.params.albumId).then(() => {
        this.setState({currentAlbum: this.props.album});
      });
    }
  }

  render () {

    return (
      <div className='artist-background'>
        <h1>Album Show Page</h1>
      </div>
    );
  }
}

export default AlbumShow;
