import React from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        searchQuery: "",
        display: "none"
    };
  }

  componentWillMount() {
    this.setState({searchQuery: ""});
  }

  update() {
    return (e) => {
      this.setState({searchQuery: e.target.value});
      this.props.searchArtists(e.target.value);
    };
  }



  componentWillUpdate(nextProps, nextState) {
    const searchResultBox = document.getElementById('search-result-box');
    if (nextState.searchQuery === "") {
      searchResultBox.style.display = "none";
    } else {
      searchResultBox.style.display = "block";
    }
  }

  render() {

      const resultList = this.props.searchResults.slice(0,4).map(result => {
        if (result.username) {
          return(
            <li key={result.username} className='search-result-item'>
              <Link className='search-result-link' to={`/artists/${result.id}`}>
                <div className='result-art'>
                  <img className='search-result-user-image' src="http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_50/v1484852877/noun_497207_cc_khq2sm.png" />
                </div>
                <div className='result-text'>
                  <div className='result-name'>{result.username}</div>
                  <div className='result-type'>Artist</div>
                </div>
              </Link>
            </li>
          );
        } else {
          return (
            <li key={result.title} className='search-result-item'>
              <Link className='search-result-link' to={`/albums/${result.id}`}>
                <div className='result-art'>
                  <img className='search-result-album-image' src={`${result.image_url}`} />
                </div>
                <div className='result-text'>
                  <div className='result-name'>{result.title}</div>
                  <div className='result-type'>Album</div>
                </div>
              </Link>
            </li>
          );
        }
      });

    const searchResultList = () => {
      const searchResultBox = document.getElementById('search-result-box');

      if (this.props.resultList === []) {
        this.setState({display: "none"});
      } else {
        this.setState({display: "block"});

      }

      return resultList;
    };

    return (
      <div className='search-bar'>
        <input
          className='search-text'
          type='text'
          placeholder='Search'
          onChange={this.update()} />
        <img className='magnifying-glass' src='http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_20/v1484759695/magnifying_glass_jbea4e.png'></img>
        <div style={{display: this.state.display}} id='search-result-box' className='search-result-box'>
          <ul className='search-results'>
            {resultList}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
