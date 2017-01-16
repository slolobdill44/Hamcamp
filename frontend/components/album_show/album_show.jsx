import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: {
        artist: {
          username: null
        },
        tracks: []
      }
    };
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId).then(() => {
      this.setState({currentAlbum: this.props.currentAlbum});
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
    const artist = this.state.currentAlbum.artist;

    return (
      <div style={{backgroundColor: artist.secondary_color}} className='show-page-background'>
        <div className='show-page-container'>
          <section className='show-page-header'>
            <main className='album-player'>
              <section className='song-player-column'>
                <div className='name-section'>
                  <h2 className='album-title'>{this.state.currentAlbum.title}</h2>
                  <h3 className='album-artist-name'>by <a className='album-artist-name-link'>{artist.username}</a></h3>
                </div>
                <div className='track-listing'>
                  <div className='inline-player'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='play-cell' rowSpan="2">
                            <a className='play-button'></a>
                          </td>
                          <td className='player-track-cell' colSpan="3">
                            <div className='player-track-info'>
                              <span className='title-section'>4 Better or 4 Worse (interlude)</span>
                              <span className='time'>00:00 / 03:34</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='progress-bar-cell'>
                            <div className='progress-bar'>
                              <div className='track-progress-square'></div>
                            </div>
                          </td>
                          <td className='prev-track-cell'>
                            <a className='prev-track-button'></a>
                          </td>
                          <td className='next-track-cell'>
                            <a className='next-track-button'></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul>
                    <li>Track 1</li>
                    <li>Track 2</li>
                  </ul>
                </div>
              </section>
              <div className='album-art'>
                <img className='album-image' src={`${this.state.currentAlbum.image_url}`}></img>
              </div>
            </main>
            <aside className='album-artist-info-sidebar'>
              <span className='artist-title'>{artist.username}</span>
            </aside>
          </section>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
