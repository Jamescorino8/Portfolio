import React from 'react';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
// import Education from './Components/Education';
// import Portfolio from './Components/Portfolio';
// import Footer from './Components/Footer';

import './style.css';

const siteProps = {
  name: "James Corino",
  title: "Software Developer",
  location: "Goshen, NY",
  email: "jamescorino8@gmail.com",
  phone: "845-699-7699",
  gitHub: "jamescorino8",
};

const primaryColor = "blue";
const secondaryColor = "green";

const App = () => {
  return (
      <div id={"main"}>
        <Header />
        <Home />
        <About />
        {/*<Education />*/}
        {/*<Portfolio />*/}
        {/*<Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />*/}
      </div>
  );
};

export default App;