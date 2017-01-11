import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <Header />
    <h1>Welcome to Hamcamp</h1>
    <Footer />
    { children }
  </div>
);

export default App;
