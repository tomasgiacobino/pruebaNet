import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ApartsImages = ({ images }) => {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images[0].map((image, index) => (
          <ImageListItem key={index}>
              <img  src={image} alt={`Image ${index}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ApartsImages;
