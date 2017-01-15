import React from 'react';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: {
        albums: []
      }
    };
  }

  componentWillMount() {
    this.props.fetchArtist().then(() => {
      this.setState({artist: this.props.artist});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.artistId !== nextProps.params.artistId ) {
      this.props.fetchArtist().then(() => {
        this.setState({artist: this.props.artist});
      });
    }
  }



  render () {
    const albumList = this.state.artist.albums.map(album => {
      return (
        <li key={album.id} className="album-list-item">
          <img src={`${album.image_url}`}></img>
          <a className="album-list-link">{album.title}</a>
        </li>
      );
    });

    return (
      <div className="artist-page-container">
        <section className="artist-header">Header</section>
        <section className="album-list"></section>
        <aside className="artist-info-sidebar">
          <span className="artist-title">{this.state.artist.username}</span>
        </aside>
        <ul className="album-container">
            { albumList }
        </ul>
      </div>
    );
  }
}

export default ArtistShow;
