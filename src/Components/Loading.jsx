import React from "react";
import { ring } from "ldrs";
import { Box } from "@chakra-ui/react";
ring.register();
export const Loading = () => {
  return (
    <Box
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      height={["90vh", "90vh", "100vh"]}
    >
      <l-ring
        size="50"
        stroke="8"
        bg-opacity="0.2"
        speed="2"
        color="#5838fc"
      ></l-ring>
    </Box>
  );
};
