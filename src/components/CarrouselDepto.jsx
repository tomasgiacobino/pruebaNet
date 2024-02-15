import { useState } from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/core";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CarrouselDepto.css";

function CarrouselDepto({ apartment }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="atras">
      <Paper
        div
        elevation={24}
        sx={{
          width: " 65%",
          backgroundColor: "#BB5D1D",
          boxShadow: "6px 4px 5px rgba(10, 10, 10, 0.7)",
          margin: "1rem 1rem 1rem 0",
          padding: "1rem",
        }}
      >
        <div className="apartsCuadro">
          {/* <h2>Id: {apartment.id}</h2> */}
          <h3>{apartment.title}</h3>
          <div className="apartsDescripcion">
            <div>
              {apartment.description.map((desc, index) => (
                <p key={index}>
                  {desc}
                </p>
              ))}
            </div>
            <div>
              {apartment.incluye.map((item, index) => (
                <p key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Paper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{ marginBottom: "10px" }}
      >
        {apartment.images[0].map((image, index) => (
          <SwiperSlide onClick={() => openModal(image)} key={index}>
            {/* <LazyLoadImage alt={`Slide ${index}`} effect="blur" src={image} /> */}
            <LazyLoadImage
              alt={`Slide ${index}`}
              effect="blur"
              src={image}
              style={{
                maxWidth: "100%",
                maxHeight: "50vh",
                objectFit: "contain",
              }} // Ajustar tamaño máximo y modo de ajuste de la imagen
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
          },
        }}
      >
        <img
          src={selectedImage}
          alt="Selected"
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            objectFit: "contain",
          }}
        />

        <CloseIcon
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 999,
          }}
        />
      </Modal>
    </div>
  );
}

export default CarrouselDepto;
