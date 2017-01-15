import React from 'react';
import SplashHeaderContainer from './splash_header/splash_header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="app-background">
    <SplashHeaderContainer />

    { children }
    <Footer />

  </div>
);

export default App;
