import React from 'react';
import MainHeaderContainer from './main_header/main_header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <MainHeaderContainer />
    <div className="app-background">
      { children }
      <Footer />
    </div>
  </div>
);

export default App;
