import React from 'react';
import { Link } from 'react-router';

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
      console.log(this.props.artist);
      this.setState({artist: this.props.artist});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.artistId !== nextProps.params.artistId ) {

      this.props.fetchArtist(nextProps.params.artistId).then(() => {
        this.setState({artist: this.props.artist});
      });
    }
  }


  render () {
    const albumList = this.state.artist.albums.map(album => {

      return (
        <li key={album.id} className="album-list-item">
          <Link to={`/albums/${album.id}`}>
            <img src={album.image_url}></img>
            <div className="album-list-link">{album.title}</div>
          </Link>
        </li>
      );
    });


    // code for adding random background color. to use, add style={stylingObject}

    // const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    // const headerColor = { backgroundColor: color };

    return (
      <div style={{backgroundColor: this.state.artist.secondary_color}}  className="show-page-background">
        <div style={{backgroundColor: this.state.artist.primary_color}} className="show-page-container">
          <img className="show-page-header" src="http://source.unsplash.com/collection/1068/1075x175"></img>
          <section className="album-list"></section>
          <aside className="artist-info-sidebar">
            <span className="artist-title">{this.state.artist.username}</span>
          </aside>
          <ul className="album-container">
              { albumList }
              <li className="album-list-item">
                <Link to={'album/new'}>
                  <button>Add New Album</button>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
