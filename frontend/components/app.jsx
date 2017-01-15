import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="app-background">
    <MainHeaderContainer />

    { children }
    <Footer />

  </div>
);

export default App;
