import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/fondo1.webp";
import CarrouselHome from './CarrouselHome';

const Home = () => {
  return (
    <div className="home-container">

      <Navbar />
      
      <div id="home" className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="banner-background" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Nuestros Aparts
          </h1>
          <p className="primary-text">
            4 Apartments para relajarte y descansar en tu estadia en la ciudad de Salta.
          </p>
        </div>
        <div>
        <CarrouselHome/>

        </div>
      </div>
    </div>
  );
};

export default Home;
