import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <h1>Welcome to Hamcamp</h1>
    <Footer />
    { children }
  </div>
);

export default App;
