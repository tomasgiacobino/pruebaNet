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
        <div className="carrouselAbout">
          <CarrouselAbout />
        </div>


      </div>

      {/* <div className="about-buttons-container">
          <button onClick={() => handleScrollToApartment(1)} className="btnVerMas">
            Apart 1
          </button>
          <button onClick={() => handleScrollToApartment(2)} className="btnVerMas">
            Apart 2
          </button>
          <button onClick={() => handleScrollToApartment(3)} className="btnVerMas">
            Apart 3
          </button>
          <button onClick={() => handleScrollToApartment(4)} className="btnVerMas">
            Apart 4
          </button>
        </div> */}
    </div>
  );
});

export default About;
