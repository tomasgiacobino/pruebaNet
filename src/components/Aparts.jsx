import React, { useEffect, useState } from "react";
import ApartsImages from "./ApartsImages";

const Apart = ({ apartmentsData }) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const updatedApartments = apartmentsData.map((apartment, index) => {
      const imagesArray = Object.values(apartment.images);
      return {
        ...apartment,
        images: imagesArray,
        // Agrega una propiedad alternante al objeto de apartamento
        alternateStyle: index % 2 === 0 ? "normal" : "reverse"
      };
    });

    setApartments(updatedApartments);
  }, [apartmentsData]);

  return (
    <div id="aparts" className="apart-container">
      {apartments.map((apartment) => (
        <div key={apartment.id} id={`apartment-${apartment.id}`} className={`apartment ${apartment.alternateStyle}`}>
          <div className="text-container">
            <h1 className="apart-title">{apartment.title}</h1>
            <div className="descripcionIncluye">
              <div className="apart-description">
                {apartment.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
              <div className="apart-incluye">
                  {apartment.incluye.map((include,index) => (
                    <p key={index}>{include}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="image-gallery">
            <ApartsImages images={apartment.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apart;
