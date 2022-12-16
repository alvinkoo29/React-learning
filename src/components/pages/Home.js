import React from 'react';
import './Home.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <Footer/>
    </>
  );
} 

export default Home;