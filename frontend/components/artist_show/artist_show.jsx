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
    this.props.fetchArtist(this.props.params.artistId).then(() => {
      this.setState({artist: this.props.artist});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.artistId !== nextProps.params.artistId ) {

      this.props.fetchArtist(nextProps.params.artistId).then(() => {
        this.setState({artist: this.props.artist});
      });
      debugger;
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


    // code for adding random background color. to use, add style={stylingObject}

    // const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    // const headerColor = { backgroundColor: color };

    return (
      <div style={{backgroundColor: this.state.artist.secondary_color}}  className="artist-background">
        <div style={{backgroundColor: this.state.artist.primary_color}} className="artist-page-container">
          <section className="artist-header">Header</section>
          <section  className="album-list"></section>
          <aside className="artist-info-sidebar">
            <span className="artist-title">{this.state.artist.username}</span>
          </aside>
          <ul className="album-container">
              { albumList }
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
