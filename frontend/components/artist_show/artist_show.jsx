import React from 'react';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ''
    };
  }

  componentWillMount() {
    const artist = this.props.fetchArtist(this.props.id);
    this.setState({artist});
    // this.props.fetchArtist(this.props.id).then(artist => {
    // this.setState({artist: artist});});
  }


  render () {
    return (
      <div className="artist-page-container">
        <section className="artist-header">Header</section>
        <section className="album-list"></section>
        <aside className="artist-info-sidebar">Sidebar</aside>
        <h1>Artist Show Page</h1>
        <h1>{this.state.artist.name}</h1>
        <h1>{this.state.artist.id}</h1>
        <ul className="album-container">
          <li className="album-list-item">Item 1</li>
          <li className="album-list-item">Item 2</li>
          <li className="album-list-item">Item 3</li>
          <li className="album-list-item">Item 4</li>
        </ul>
      </div>
    );
  }
}

export default ArtistShow;
