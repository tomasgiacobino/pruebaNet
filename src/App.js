import "./App.css";
// import './estilos.css'
import About from "./components/About";
import Aparts from "./components/Aparts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

const importAllC1 = (r) => r.keys().map(r);
const imagesC1 = importAllC1(
  require.context("./Assets/images/cuarto1/", false, /\.(jpeg|webp)$/)
);

const importAllC2 = (r) => r.keys().map(r);
const imagesC2 = importAllC2(
  require.context("./Assets/images/cuarto2/", false, /\.(jpeg|webp)$/)
);

const importAllC3 = (r) => r.keys().map(r);
const imagesC3 = importAllC3(
  require.context("./Assets/images/cuarto3/", false, /\.(jpeg|webp)$/)
);

const importAllC4 = (r) => r.keys().map(r);
const imagesC4 = importAllC4(
  require.context("./Assets/images/cuarto4/", false, /\.(jpeg|webp)$/)
);

function App() {
  const apartamentos = [
    {
      id: 1,
      title: "Terra María Apart 1",
      description: ["3 huéspedes", "1 dormitorio", "2 camas" ,"1 baño"],
      incluye: ["Wifi", "Zona de trabajo", "Se permiten mascostas", "TV HD 34''", "Aire acondicionado"],
      images: [imagesC1],
    },
    {
      id: 2,
      title: "Terra María Apart 2",
      description: ["3 huéspedes", "1 dormitorio", "2 camas", "1 baño"],
      incluye: ["Wifi", "TV", "Aire acondicionado"," Secador de pelo", "Estacionamiento pago"],
      images: [imagesC2],
    },
    {
      id: 3,
      title: "Terra María Apart 3",
      description: ["4 huéspedes", "1 dormitorio", "2 camas", "1 baño"],
      incluye: ["Wifi", "Zona de trabajo", "TV", "Aire Acondicionado", "Secador de pelo"],
      images: [imagesC3],
    },
    {
      id: 4,
      title: "Terra María Apart 4",
      description: ["2 huéspedes", "1 dormitorio", "1 cama" ,"1 baño"],
      incluye: ["Wifi", "Zona de trabajo", "TV", "Aire acondicionado", "Heladera"],
      images: [imagesC4],
    },
  ];

  return (
    <div className="App">
      <Home />
      <About />
      <Aparts apartmentsData={apartamentos} />
      {/* <Contact /> */}
      <Footer />
      <WhatsappShareButton
        url={window.location.href}
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "2rem",
        }}
      >
        <WhatsappIcon size={62} round />
      </WhatsappShareButton>
    </div>
  );
}

export default App;
