import React from 'react';
import HeaderContainer from '../header/header_container';
import Footer from '../footer/footer';


const Splash = () => {
  return (
    <div>
      <HeaderContainer />
      <main className="splash-body">
        <img className="splash-image" src="https://images.unsplash.com/35/hKViPxgDRGuiGns6wv5S_IMG_5317.jpeg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=440&fit=crop&s=3f3e3ecedf5a02438e09668be306b025" />
        <section className="featured-artists">

        </section>
      </main>
      <Footer />
    </div>

  );
};

export default Splash;
