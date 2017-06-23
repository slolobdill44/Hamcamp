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
        image_url: "",
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

    const noTracks = this.props.currentUser ? (
      <div>
        <br />
        <p className='no-tracks-text'>Your album doesn't have any tracks!</p>
        <Link className='first-track-add-link' to={`albums/${album.id}/track/new`} >Add Your First Track!</Link>
      </div>
    ): "";

    const addTracks = this.props.currentUser ? <Link className='track-add-link' to={`albums/${this.state.currentAlbum.id}/track/new`} >Add Track</Link> : "";

    const editButton = this.props.currentUser ? <Link className='album-edit-link' to={`albums/${album.id}/edit`}>Edit Album</Link> : "";

    const fastlyImgURL = this.state.currentAlbum.image_url.replace("s3-us-west-1.amazonaws.com/hamcamp", "s3bucket.hamcamp.co");

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

                { album.tracks.length === 0 ? noTracks : <AudioPlayer tracks={album.tracks} /> }

                <br />
                <br />
                { album.tracks.length === 0 ? null : addTracks }


                <div className='description-section'>{ album.description }</div>
              </section>
              <div className='album-art'>
                <img className='album-image' src={ fastlyImgURL }></img>
              </div>
            </main>
            <aside className='album-artist-info-sidebar'>
              <span className='artist-title'>
                <Link to={`artists/${ artist.id }`}>
                  { artist.username }
                </Link>
              </span>
              <span className='discography'></span>
              <br />
              { editButton }
            </aside>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
