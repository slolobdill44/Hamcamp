import React from 'react';
import { Link } from 'react-router';
import AudioPlayer from './audio_player';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: {
        artist: {
          username: null
        },
        tracks: [
          { name: "",
          track_url: "" }
        ]
      },
      currentTrack: ""
    };

  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId)
      .then(() => {
        this.setState({
          currentAlbum: this.props.currentAlbum});
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.albumId !== nextProps.params.albumId ) {

      this.props.fetchAlbum(nextProps.params.albumId).then(() => {
        this.setState({currentAlbum: this.props.currentAlbum});
      });
    }
  }

  render () {
    const album = this.state.currentAlbum;
    const artist = this.state.currentAlbum.artist;

    const noTracks = (
      <div>
        <br />
        <p>Your album doesn't have any tracks!</p>
        <Link to={`albums/${album.id}/track/new`} >Add Your First Track!</Link>
      </div>
    );

    const addTracks = (
      <Link to={`albums/${this.state.currentAlbum.id}/track/new`} >Add Track</Link>
    );

    return (
      <div style={{backgroundColor: artist.secondary_color}} className='show-page-background'>
        <div className='show-page-container'>
          <img className='show-page-header' src="https://images.unsplash.com/photo-1416273567255-8abe875affcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1075&h=175&fit=crop&s=5ac1ddc0957392dd2e020618b9feabf9"></img>
            <main className='album-player'>
              <section className='song-player-column'>
                <div className='name-section'>
                  <h2 className='album-show-album-title'>{album.title}</h2>
                  <h3 className='album-artist-name'>by <Link
                      to={`artists/${artist.id}`}
                      className='album-artist-name-link'>{artist.username}</Link>

                  </h3>
                </div>
                  <br />
                  <br />

                {album.tracks.length === 0 ? noTracks : <AudioPlayer tracks={album.tracks} />}

                <br />
                <br />
                {album.tracks.length === 0 ? null : addTracks }


                <div className='description-section'>{album.description}.</div>
              </section>
              <div className='album-art'>
                <img className='album-image' src={album.image_url}></img>
              </div>
            </main>
            <aside className='album-artist-info-sidebar'>
              <span className='artist-title'>{artist.username}</span>
                <Link className='album-edit-link' to={`albums/${album.id}/edit`}>Edit Album</Link>
              <span className='discography'></span>
            </aside>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
