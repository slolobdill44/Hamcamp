import React from 'react';

class SearchBar extends React.Component {



  render() {

    const searchResultItem = (
      <li className='search-result-item'>
        <div className='result-art'></div>
        <div className='result-text'>
          <div className='result-name'>Band Name</div>
          <div className='result-type'>Artist</div>
        </div>
      </li>
    );

    return (
      <div className='search-bar'>
        <input className='search-text' type='text' placeholder='Search'></input>
        <img className='magnifying-glass' src='http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_20/v1484759695/magnifying_glass_jbea4e.png'></img>
        <div className='search-result-box'>
          <ul className='search-results'>
            {searchResultItem}
            {searchResultItem}
            {searchResultItem}
            {searchResultItem}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
