import React, { forwardRef } from "react";
import BannerBackground from "../Assets/home-banner-background2.png";
import MicrowaveIcon from '@mui/icons-material/Microwave';
import WifiIcon from '@mui/icons-material/Wifi';
import CarrouselAbout from './CarrouselAbout'

const About = () => {
  return (
    <div className="divAbout">
      <div id="about" className="about-container">
        <div className="about-bannerImage-container">
          <img src={BannerBackground} alt="banner-background" />
        </div>

        <div className="textosAbout">
          <h3 className="txtEspaciosComunes">Espacios comunes</h3>
          <div className="divDescEspaciosComunes">
          <p className="salaEstar">Sala de estar con desayunador</p>
          <p className="cocina">Cocina</p>

          </div>
        </div>
        <div className="carrouselAbout">
          <CarrouselAbout />
        </div>


      </div>
    </div>
  );
}

export default About;
