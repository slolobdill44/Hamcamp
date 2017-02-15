import React from 'react';

const LoadingSpinner = () => (
  <div id="loading-bacon-container">
    <img id="loading-bacon" src="http://res.cloudinary.com/adrianlobdill/image/upload/v1487190887/meatspinnerslow_jp3z5f.gif" alt="bacon spinner"/>
    <div id="loading-text">Processing...</div>
  </div>
);

// slower spinner
// http://res.cloudinary.com/adrianlobdill/image/upload/v1487190887/meatspinnerslow_jp3z5f.gif

//faster spinner
// http://res.cloudinary.com/adrianlobdill/image/upload/v1487055680/hammo_spin_jimjbe.gif

export default LoadingSpinner;
