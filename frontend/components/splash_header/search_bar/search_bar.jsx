import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className='search-bar'>
        <input className='search-text' type='text' placeholder='Search'></input>
        <img className='magnifying-glass' src='http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_20/v1484759695/magnifying_glass_jbea4e.png'></img>
        <div className='search-result-box'>
          <ul className='search-results'>
            <li className='search-result-item'>
              <div className='result-art'></div>
              <div className='result-text'>
                <div className='result-name'></div>
                <div className='result-type'></div>
              </div>
            </li>
            <li className='search-result-item'>Result 2</li>
            <li className='search-result-item'>Result 3</li>
            <li className='search-result-item'>Result 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
