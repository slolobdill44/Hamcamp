import React from 'react';
import SplashHeaderContainer from '../splash_header/splash_header_container';
import { Link } from 'react-router';
import Footer from '../footer/footer';


class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "e",
      searchResults: []
    };

    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    this.props.searchArtists(this.state.searchQuery)
      .then(() => this.setState({searchResults: this.props.searchResults}));
  }

  render() {
    const featuredAlbumList = this.state.searchResults.map(result => {
      //if result is an album (has a title)
      if (result.title) {
        return (
          <li key={result.id} className='featured-album-list-item'>
            <Link className='featured-search-result-box' to={`/albums/${result.id}`}>
              <img src={result.image_url}></img>
              <div className="featured-album-list-link">{result.title}</div>
              <div className="featured-album-artist">by {result.artist}</div>
            </Link>
          </li>
        );
      }
    });

    const trimmedList = featuredAlbumList.filter(n => {
      return n !== "undefined";
    });

    return (
      <div>
        <SplashHeaderContainer />
        <main className="splash-body">
          <img className="splash-image" src="http://res.cloudinary.com/adrianlobdill/image/upload/v1484936572/newsplashheader_k3906u.png" />
          <section className="featured-albums">
            <h3 className="featured-albums-header">Our Featured Albums</h3>
            <ul className="featured-albums-list">
              { trimmedList }
            </ul>
          </section>
          <footer></footer>
        </main>
      </div>
    );
  }
}


export default Splash;
