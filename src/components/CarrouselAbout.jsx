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
import Patio from "../Assets/images/Patio/patio.webp";
import Sillon from "../Assets/images/Patio/sillon.webp";
import Ventana from "../Assets/images/Patio/ventana.webp";
import Pasillo from "../Assets/images/Patio/pasillo.webp";
import Puerta from "../Assets/images/Cocina/puerta.webp";
import Pava from "../Assets/images/Cocina/pava.webp";
import Calefon from "../Assets/images/Cocina/calefon.webp";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 1,
    img: Patio,
  },
  {
    label: 2,
    img: Sillon,
  },
  {
    label: 3,
    img: Ventana,
  },
  {
    label: 4,
    img: Pasillo,
  },
  {
    label: 5,
    img: Puerta,
  },
  {
    label: 6,
    img: Pava,
  },
  {
    label: 7,
    img: Calefon,
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
