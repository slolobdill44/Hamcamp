import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      display: "none"
    };

    this.artistResultLink = this.artistResultLink.bind(this);
    this.albumResultLink = this.albumResultLink.bind(this);
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
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.getElementById('search-container');

    if (nextState.searchQuery === "") {
      searchResultBox.style.display = "none";
    } else {
      searchResultBox.style.display = "block";
      searchInput.addEventListener("blur", () => {

        searchResultBox.style.display = "none";
      });
      searchInput.addEventListener("focus", () => {
        searchResultBox.style.display = "block";
      });
    }
  }

  artistResultLink(id) {
    hashHistory.push(`/artists/${id}`);
  }

  albumResultLink(id) {
    hashHistory.push(`/albums/${id}`);
  }

  render() {

    const resultList = this.props.searchResults.slice(0,4).map(result => {
      if (result.username) {
        return(
          <li key={result.username} className='search-result-item'>
            <div className='search-result-link' onMouseDown={() => this.artistResultLink(result.id)}>
              <div className='result-art'>
                <img className='search-result-user-image' src="https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_50/v1484852877/noun_497207_cc_khq2sm.png" />
              </div>
              <div className='result-text'>
                <div className='result-name'>{result.username}</div>
                <div className='result-type'>Artist</div>
              </div>
            </div>
          </li>
        );
      } else {
        return (
          <li key={result.title} className='search-result-item'>
            <div className='search-result-link' onMouseDown={() => this.albumResultLink(result.id)}>
              <div className='result-art'>
                <img className='search-result-album-image' src={`${result.image_url}`} />
              </div>
              <div className='result-text'>
                <div className='result-name'>{result.title}</div>
                <div className='result-type'>Album</div>
              </div>
            </div>
          </li>
        );
      }
    });

    const searchResultList = () => {

      if (this.props.resultList === []) {
        this.setState({display: "none"});
      } else {
        this.setState({display: "block"});
      }
      return resultList;
    };

    return (
      <div id='search-container' className='search-bar'>
        <input
          className='search-text'
          id='search-input'
          type='text'
          placeholder='Search'
          onChange={this.update()} />
        <img className='magnifying-glass' src='https://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_20/v1484759695/magnifying_glass_jbea4e.png'></img>
        <div style={{display: this.state.display}} id='search-result-box' className='search-result-box'>
          <ul className='search-results'>
            { resultList ? resultList :
              <li key="no-results" className='search-result-item'>
                <div className='search-result-link'>
                  <div className='result-art'>
                  </div>
                  <div className='result-text'>Sorry, no results were found for that search!
                  </div>
                </div>
              </li>}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
