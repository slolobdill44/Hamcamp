import React from 'react';
import HeaderContainer from '../header/header_container';
import Footer from '../footer/footer';


const Splash = () => {
  return (
    <div>
      <HeaderContainer />
      <main className="splash-body">
        <img className="splash-image" src="https://source.unsplash.com/collection/1068/1200x440" />
      </main>
      <Footer />
    </div>

  );
};

export default Splash;
