import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTrack: 0,
      isScrubbing: false,
      musicPlaying: false,
      trackPosition: "00:00",
      trackLength: "00:00"
    };

    this.playAudio = this.playAudio.bind(this);
    this.setState = this.setState.bind(this);
    this.trackTime = this.trackTime.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.tracks !== nextProps.tracks ) {
      const trackNumber = this.state.currentTrack;

      const track = nextProps.tracks[trackNumber].track_url;

      const fastlyTrack = track.replace("s3-us-west-1.amazonaws.com/hamcamp", "s3bucket.hamcamp.co");

      const music = document.getElementById('music');
      const source = document.getElementById('audio-source');

      source.src = fastlyTrack;

      music.load();
    }
  }

  componentDidMount() {
    const music = document.getElementById('music');
    music.addEventListener('timeupdate', this.timeUpdate, false);
    music.addEventListener('loadeddata', this.setDuration, false);

    const playhead = document.getElementById('playhead');
    const progressBar = document.getElementById('progress-bar');
    const progressBarWidth = (progressBar.offsetWidth - playhead.offsetWidth - 15);

    playhead.onmousedown = () => {

      this.setState({isScrubbing: true});

      document.onmouseup = () => {
        document.onmousemove = null;

        this.setState({isScrubbing: false});

      };
      document.onmousemove = (drag) => {
        const newMarginLeft = drag.clientX - 198 - progressBar.offsetLeft;

        if (newMarginLeft >= 0 && newMarginLeft < progressBarWidth) {
          playhead.style.marginLeft = newMarginLeft + 'px';
        } else if (newMarginLeft < 0) {
          playhead.style.marginLeft = '0px';
        } else if (newMarginLeft > progressBarWidth) {
          playhead.style.marginLeft = progressBarWidth + 'px';
        }

        const playbackPercent = (newMarginLeft / progressBarWidth);

        const newTrackPosition = playbackPercent * music.duration;
        this.setState({currentTrackPosition: newTrackPosition});
        music.currentTime = newTrackPosition;

        const currentTrackPosition = document.getElementById('track-time');
        currentTrackPosition.innerHTML = this.trackTime();

      };
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.currentTrack !== nextState.currentTrack ) {
      const trackNumber = nextState.currentTrack;

      const track = nextProps.tracks[trackNumber].track_url;

      const music = document.getElementById('music');
      const source = document.getElementById('audio-source');

      source.src = track;

      music.load();
      music.play();
    }
  }

  timeUpdate() {

    if (this.state.isScrubbing === false) {
      const music = document.getElementById('music');
      const playhead = document.getElementById('playhead');
      const currentTrackPosition = document.getElementById('track-time');

      const percentage = 100 * (Math.floor(music.currentTime) / Math.floor(music.duration));
      playhead.style.marginLeft = percentage + '%';
      currentTrackPosition.innerHTML = this.trackTime();
    }

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

  changeTrack(newTrack) {
    this.setState({currentTrack: newTrack});
    this.setState({musicPlaying: true});
  }

  nextTrack() {
    if (this.state.currentTrack < (this.props.tracks.length - 1)) {
      const nextTrackNum = (this.state.currentTrack + 1);
      this.setState({currentTrack: nextTrackNum});
    }
    if (!this.state.musicPlaying) {
      this.setState({musicPlaying: true});
    }
  }

  prevTrack() {
    if (this.state.currentTrack > 0) {
      const nextTrackNum = (this.state.currentTrack - 1);
      this.setState({currentTrack: nextTrackNum});
    }
  }

  render() {

    const pauseOrPlayLarge = this.state.musicPlaying === true ? "https://res.cloudinary.com/adrianlobdill/image/upload/v1484616436/pause_button.png" : "https://res.cloudinary.com/adrianlobdill/image/upload/v1484614687/play_button.png";

    const tracks = this.props.tracks;

    const currentTrackNum = this.state.currentTrack;

    const prevTrackButtonStyle = currentTrackNum === 0 ? "https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,o_20,w_23/v1484611361/noun_121425_cc_jt8gzd.png" : "https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_23/v1484611361/noun_121425_cc_jt8gzd.png";

    const nextTrackButtonStyle = currentTrackNum === (tracks.length - 1) ? "https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,o_20,w_23/v1484611457/noun_121427_cc_luesuz.png" : "https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_23/v1484611457/noun_121427_cc_luesuz.png";

    const trackList = tracks.map((track, idx) => {
      return (
        <tr key={idx} className='track-row'>
          <td className='track-row-play-col' onClick={() => this.changeTrack(idx)}>
            <img className='track-play-link' src="https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_20/v1484614687/play_button.png"></img>
          </td>
          <td className='track-row-number-col'>
            <div className='track-number-info'>{track.track_number}.</div>
          </td>
          <td className='track-title-col'>
            <div className='track-title-info'>{track.name}</div>
          </td>
          <td className='track-download-col'>
            <a className='track-download-link'></a>
          </td>
        </tr>
      );
    });

    return(
      <div>
        <audio id='music' className='music-player' controls='controls'>
          <source id='audio-source' src=''/>
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
                    <span className='title-section'>{tracks[currentTrackNum].name}</span>
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
                <td className='prev-track-cell' onClick={() => this.prevTrack()}>
                  <img className='prev-track-button' src={prevTrackButtonStyle}></img>
                </td>
                <td className='next-track-cell' onClick={() => this.nextTrack()}>
                  <img className='next-track-button' src={nextTrackButtonStyle}></img>
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
    );
  }
}

export default AudioPlayer;
