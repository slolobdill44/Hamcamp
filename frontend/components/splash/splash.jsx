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
        return (
          <li key={result.id} className='album-list-item'>
            <Link className='search-result-link' to={`/albums/${result.id}`}>
              <img src={result.image_url}></img>
              <div className="album-list-link">{result.title}</div>
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
          <section className="featured-artists">
            <h3 className="featured-artists-header">Our Featured Albums</h3>
            <ul>
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
