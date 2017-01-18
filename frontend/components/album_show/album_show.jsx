import React from 'react';
import { Link } from 'react-router';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTrack: {
        albumTrackNo: 1,
        name: null,
        url: null,
        length: 0
      },
      currentAlbum: {
        artist: {
          username: null
        },
        tracks: [
          { name: "" }
        ]
      },
      musicPlaying: false,
      trackLength: "00:00"
    };
    this.playAudio = this.playAudio.bind(this);
    this.setState = this.setState.bind(this);
    this.trackTime = this.trackTime.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
    this.setDuration = this.setDuration.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId)
      .then(() => {
        this.setState({
          currentAlbum: this.props.currentAlbum,
          currentTrack: this.props.currentAlbum.tracks[0]});
      });
  }

  componentDidMount() {
    const music = document.getElementById('music');
    music.addEventListener('timeupdate', this.timeUpdate, false);

    const playhead = document.getElementById('playhead');
    const progressBar = document.getElementById('progress-bar');
    const progressBarWidth = (progressBar.offsetWidth - playhead.offsetWidth - 15);
    // playhead.addEventListener('mousedown', mouseDown, false);

    playhead.onmousedown = function(e1) {
      const startPoint = e1.clientX;
      let change = 0;

      document.onmouseup = function() {
        document.onmousemove = null;
      };
      document.onmousemove = function(drag) {
        const newMarginLeft = drag.clientX - 367 - progressBar.offsetLeft;

        if (newMarginLeft >= 0 && newMarginLeft < progressBarWidth) {
          playhead.style.marginLeft = newMarginLeft + 'px';
        } else if (newMarginLeft < 0) {
          playhead.style.marginLeft = '0px';
        } else if (newMarginLeft > progressBarWidth) {
          playhead.style.marginLeft = progressBarWidth + 'px';
        }

        const playbackPercent = (newMarginLeft / progressBarWidth);
        music.currentTime = playbackPercent * music.duration;

        console.log('mousemove');
        console.log(progressBar.offsetLeft);
      };
    };

    setTimeout(this.setDuration, 800);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.albumId !== nextProps.params.albumId ) {

      this.props.fetchAlbum(nextProps.params.albumId).then(() => {
        this.setState({currentAlbum: this.props.currentAlbum});
      });
    }
  }

  timeUpdate() {
    const music = document.getElementById('music');
    const playhead = document.getElementById('playhead');
    const currentTrackPosition = document.getElementById('track-time');

    const percentage = 100 * (Math.floor(music.currentTime) / Math.floor(music.duration));
    playhead.style.marginLeft = percentage + '%';
    currentTrackPosition.innerHTML = this.trackTime();
  }

  setDuration() {
    const music = document.getElementById('music');

    let minutes = Math.floor(music.duration / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes.toString();
    }
    let seconds = Math.floor(music.duration % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds.toString();
    }

    let trackLength = minutes + ":" + seconds;

    this.setState({trackLength: trackLength});
  }

  trackTime() {
    const music = document.getElementById('music');
    let minutes = Math.floor(music.currentTime / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes.toString();
    }
    let seconds = Math.floor(music.currentTime % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds.toString();
    }
    const trackTime = minutes + ":" + seconds;

    return trackTime;
  }

  playAudio() {
    const music = document.getElementById('music');
    if (this.state.musicPlaying) {
      music.pause();
      this.setState({musicPlaying: false});
  	} else {
      music.play();
      this.setState({musicPlaying: true});
      this.trackTime();
      this.setDuration();
  	}
  }

  nextTrack(trackId) {

  }

  prevTrack(trackId) {

  }

  render () {
    const artist = this.state.currentAlbum.artist;

    const pauseOrPlayLarge = this.state.musicPlaying === true ? "http://res.cloudinary.com/adrianlobdill/image/upload/v1484616436/pause_button.png" : "http://res.cloudinary.com/adrianlobdill/image/upload/v1484614687/play_button.png"

    const tracks = this.state.currentAlbum.tracks;

    const trackList = this.state.currentAlbum.tracks.map((track, idx) => {
      return (
        <tr key={idx} className='track-row'>
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
                  <br />
                  <br />

                  <audio id='music' className='music-player' controls='controls'>
                    <source src="http://res.cloudinary.com/adrianlobdill/video/upload/q_18/v1484619225/1-01_Flatline_uky8wq.mp3" type='audio/mp3'/>
                  </audio>

                  <div className='inline-player'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='play-cell' onClick={this.playAudio} rowSpan="2">
                                <img className='play-button' src={pauseOrPlayLarge}></img>
                          </td>
                          <td className='player-track-cell' colSpan="3">
                            <div className='player-track-info'>
                              <span className='title-section'>{tracks[0].name}</span>
                              <span className='time'><span id='track-time'>00:00</span> / {this.state.trackLength}</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='progress-bar-cell'>
                            <div id='progress-bar' className='progress-bar'>
                              <div id='playhead' className='track-progress-square'></div>
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
