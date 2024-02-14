import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ApartsImages = ({ images }) => {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: "hidden" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images[0].map((image, index) => (
          <ImageListItem key={index}>
            <LazyLoadImage
              key={index}
              src={image}
              alt={`Image Alt-${index}`}
              className="img-lazy"
              placeholderSrc={"placeholder"}
              effect="blur"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ApartsImages;
