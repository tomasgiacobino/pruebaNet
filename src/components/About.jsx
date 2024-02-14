
import BannerBackground from "../Assets/fondo2W.webp";
import CarrouselAbout from './CarrouselAbout';
import CountertopsIcon from '@mui/icons-material/Countertops';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

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
            <p className="salaEstar"><BakeryDiningIcon className="salaEstarIcon" /> Sala de estar con desayunador</p>
            <p className="cocina"> <CountertopsIcon className="cocinaIcon" /> Cocina</p>
          </div>
          <div className="apiMaps">
            <div className="mapContainer">
              <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843.578345941893!2d-65.40601436923932!3d-24.788568054250007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bd4bc6b6eb%3A0x6d72340b1e7ba947!2sVicente%20L%C3%B3pez%2C%20Salta!5e0!3m2!1ses!2sar!4v1707858712428!5m2!1ses!2sar"></iframe>
            </div>
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
