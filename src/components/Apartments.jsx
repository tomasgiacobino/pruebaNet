import React from "react";
import CarrouselDepto from "./CarrouselDepto";

const Apartments = ({ apartments }) => {
  return (
    <div>
      {apartments.map((apartment, index) => (
        <CarrouselDepto key={index} apartment={apartment} />
      ))}
    </div>
  );
};

export default Apartments;
