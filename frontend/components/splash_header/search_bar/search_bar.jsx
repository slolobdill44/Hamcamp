import React from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        searchQuery: ""
    };
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
        return (
          <li key={result.id} className='search-result-item'>
            <Link to={`/artists/${result.id}`}>
              <div className='result-art'></div>
              <div className='result-text'>
                <div className='result-name'>{result.username}</div>
                <div className='result-type'>Artist</div>
              </div>
            </Link>
          </li>
        );
      });


      // const searchResultBox = document.getElementById('search-result-box');
      // if (resultList === []) {
      //   searchResultBox.style.display = "none";
      // } else {
      //   searchResultBox.style.display = "block";
      // }


    const searchResultList = () => {
      const searchResultBox = document.getElementById('search-result-box');

      if (this.props.resultList === []) {
        searchResultBox.style.display = "none";
      } else {
        searchResultBox.style.display = "block";
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
        <div id='search-result-box' className='search-result-box'>
          <ul className='search-results'>
            {resultList}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
