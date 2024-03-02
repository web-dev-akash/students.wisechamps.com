import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CreditsExhausted } from "./Alerts/CreditsExhausted";
import { AboutToStart } from "./Alerts/AboutToStart";
import { MeetingInProgress } from "./Alerts/MeetingInProgress";
import { LowCredits } from "./Alerts/LowCredits";

export const CarousalMain = () => {
  const { alert } = useSelector((state) => state);
  return (
    <Box
      gridColumn={["unset", "unset", "1 / span 2", "1 / span 2"]}
      overflow={"hidden"}
      width={"100%"}
      borderRadius={"10px"}
      display={alert.length > 0 ? "block" : "none"}
    >
      <Carousel
        autoPlay={true}
        centerMode={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        centerSlidePercentage={100}
      >
        {alert.length > 0
          ? alert.map((alert) => {
              if (alert === "credits") {
                return <CreditsExhausted />;
              }
              if (alert === "aboutToStart") {
                return <AboutToStart />;
              }
              if (alert === "inProgress") {
                return <MeetingInProgress />;
              }
              if (alert === "lowCredits") {
                return <LowCredits />;
              }
              return null;
            })
          : null}
      </Carousel>
    </Box>
  );
};
