import React, { forwardRef } from "react";
import BannerBackground from "../Assets/home-banner-background2.png";
import MicrowaveIcon from '@mui/icons-material/Microwave';
import WifiIcon from '@mui/icons-material/Wifi';
import CarrouselAbout from './CarrouselAbout'

const About = forwardRef((props, ref) => {
  const handleScrollToApartment = (apartmentId) => {
    const apartmentElement = document.getElementById(`apartment-${apartmentId}`);
    if (apartmentElement) {
      apartmentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={ref} id="about" className="divAbout">
      <div className="about-container">
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
        <div>
          <CarrouselAbout />
        </div>


      </div>
    </div>
  );
});

export default About;
