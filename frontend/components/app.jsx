import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <body>
      <h1>Welcome to Hamcamp</h1>
    </body>
    <Footer />
    { children }
  </div>
);

export default App;
