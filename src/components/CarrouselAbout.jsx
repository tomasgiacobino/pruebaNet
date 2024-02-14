import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ImgCarrousel1 from "../Assets/images/Patio/patio1.jpeg";
import ImgCarrousel2 from "../Assets/images/Patio/patio2.jpeg";
import ImgCarrousel3 from "../Assets/images/Patio/ventana.jpeg";
import ImgCarrousel4 from "../Assets/images/Patio/pasillo.jpeg";
import ImgCarrousel5 from "../Assets/images/Cocina/cocina1.jpeg";
import ImgCarrousel6 from "../Assets/images/Cocina/cocina2.jpeg";
import ImgCarrousel7 from "../Assets/images/Cocina/cocina7.jpeg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 1,
    img: ImgCarrousel1,
  },
  {
    label: 2,
    img: ImgCarrousel2,
  },
  {
    label: 3,
    img: ImgCarrousel3,
  },
  {
    label: 4,
    img: ImgCarrousel4,
  },
  {
    label: 5,
    img: ImgCarrousel5,
  },
  {
    label: 6,
    img: ImgCarrousel6,
  },
  {
    label: 7,
    img: ImgCarrousel7,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        flexGrow: 1,
        borderRadius: "10px",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 5,
          bgcolor: "transparent",
          position: "absolute",
          zIndex: 1,
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: "block",
                  maxWidth: 600,
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: "10px",
                }}
                src={step.img}
              />
            ) : null}
            {console.log(step)}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        sx={{
          position: "relative",
          bottom: "3rem",
          left: 0,
          right: 0,
          bgcolor: "transparent",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "#bc5e1c",
          },
        }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              "&.MuiButton-root": {
                color: "#bc5e1c",
              },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              "&.MuiButton-root": {
                color: "#bc5e1c",
              },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
