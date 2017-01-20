import React from 'react';
import SplashHeaderContainer from '../splash_header/splash_header_container';
import { Link } from 'react-router';
import Footer from '../footer/footer';


class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "a"
    };
  }

  componentWillMount() {
    this.props.searchArtists(this.state.searchQuery);
  }

  render() {
    const featuredAlbumList = this.props.searchResults.map(result => {
      //if result is an album (has a title)
      if (result.title) {
        console.log(result);
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
        </main>
        <Footer />
      </div>
    );
  }
}


export default Splash;
