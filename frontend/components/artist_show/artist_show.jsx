import React from 'react';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.artist = this.props.fetchArtist(this.props.id);
  }

  ComponentDidMount() {
    this.props.fetchArtist(this.props.id);
  }

  render () {
    return (
      <div className="artist-page-container">
        <section className="artist-header"></section>
        <section className="album-list"></section>
        <aside className="artist-info-sidebar"></aside>
        <h1>Artist Show Page</h1>
        <h1>{this.artist.name}</h1>
        <h1>{this.artist.id}</h1>

      </div>
    );
  }
}

export default ArtistShow;
