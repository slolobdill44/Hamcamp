import React from 'react';
import { Link } from 'react-router';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: {
        artist: {
          username: null
        },
        tracks: [
          { name: "" }
        ]
      },
      musicPlaying: false,
      currentTime: 0,
      playheadPosition: "0%"
    };
    this.playAudio = this.playAudio.bind(this);
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

  playAudio() {
    const music = document.getElementById('music');
    const playHead = document.getElementById('playhead');
      if (this.state.musicPlaying) {
        music.pause();
        this.setState({musicPlaying: false});
  	} else {
        music.play();
        this.setState({musicPlaying: true});
        this.setState({currentTime: music.currentTime});
        const percentage = 100 * (music.currentTime / music.duration);
        this.setState({playheadPosition: percentage});
        console.log(music.currentTime);
        console.log(music.duration);
  	}
  }

  render () {
    const artist = this.state.currentAlbum.artist;

    const pauseOrPlayLarge = this.state.musicPlaying === true ? "http://res.cloudinary.com/adrianlobdill/image/upload/v1484616436/pause_button.png" : "http://res.cloudinary.com/adrianlobdill/image/upload/v1484614687/play_button.png"

    const tracks = this.state.currentAlbum.tracks;

    const trackList = this.state.currentAlbum.tracks.map(track => {
      return (
        <tr key={track.album_track_number} className='track-row'>
          <td className='track-row-play-col'>
            <img className='track-play-link' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_20/v1484614687/play_button.png"></img>
          </td>
          <td className='track-row-number-col'>
            <div className='track-number-info'>{track.album_track_number}.</div>
          </td>
          <td className='track-title-col'>
            <div className='track-title-info'>{track.name}</div>
          </td>
          <td className='track-download-col'>
            <a className='track-download-link'>download</a>
          </td>
        </tr>
      );
    });

    return (
      <div style={{backgroundColor: artist.secondary_color}} className='show-page-background'>
        <div className='show-page-container'>
          <img className='show-page-header' src="https://images.unsplash.com/photo-1416273567255-8abe875affcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1075&h=175&fit=crop&s=5ac1ddc0957392dd2e020618b9feabf9"></img>
            <main className='album-player'>
              <section className='song-player-column'>
                <div className='name-section'>
                  <h2 className='album-title'>{this.state.currentAlbum.title}</h2>
                  <h3 className='album-artist-name'>by <Link
                      to={`artists/${artist.id}`}
                      className='album-artist-name-link'>{artist.username}</Link>
                  </h3>
                </div>
                <div className='track-listing'>
                  <div className='inline-player'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='play-cell' rowSpan="2">
                            <img className='play-button' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_54/v1484614687/play_button.png"></img>
                          </td>
                          <td className='player-track-cell' colSpan="3">
                            <div className='player-track-info'>
                              <span className='title-section'>{tracks[0].name}</span>
                              <span className='time'>00:00 / 03:34</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='progress-bar-cell'>
                            <div className='progress-bar'>
                              <div style={{marginLeft: this.state.playheadPosition}} id='playhead' className='track-progress-square'></div>
                            </div>
                          </td>
                          <td className='prev-track-cell'>
                            <img className='prev-track-button' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,o_20,w_23/v1484611361/noun_121425_cc_jt8gzd.png"></img>
                          </td>
                          <td className='next-track-cell'>
                            <img className='next-track-button' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_23/v1484611457/noun_121427_cc_luesuz.png"></img>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <table>
                    <tbody>
                      { trackList }
                    </tbody>
                  </table>
                </div>
                <div className='description-section'>{this.state.currentAlbum.description}.</div>


                <audio id='music' className='music-player' controls='controls'>
                  <source src="http://res.cloudinary.com/adrianlobdill/video/upload/v1484618676/01._The_Pharcyde_-_4_Better_or_4_Worse_Interlude_btksow.mp3" type='audio/mp3'/>
                  <source src="http://res.cloudinary.com/adrianlobdill/video/upload/v1484619225/1-01_Flatline_uky8wq.mp3" type='audio/mp3'/>
                </audio>

                <div className='inline-player'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='play-cell' onClick={() => this.playAudio()} rowSpan="2">
                              <img className='play-button' src={pauseOrPlayLarge}></img>
                        </td>
                        <td className='player-track-cell' colSpan="3">
                          <div className='player-track-info'>
                            <span className='title-section'>{tracks[0].name}</span>
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
                          <img className='prev-track-button' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,o_20,w_23/v1484611361/noun_121425_cc_jt8gzd.png"></img>
                        </td>
                        <td className='next-track-cell'>
                          <img className='next-track-button' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_23/v1484611457/noun_121427_cc_luesuz.png"></img>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              </section>
              <div className='album-art'>
                <img className='album-image' src={`${this.state.currentAlbum.image_url}`}></img>
              </div>
            </main>
            <aside className='album-artist-info-sidebar'>
              <span className='artist-title'>{artist.username}</span>
              <span className='discography'>discography</span>
            </aside>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
