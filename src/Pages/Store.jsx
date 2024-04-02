import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../Components/Loading";
import { Link } from "react-router-dom";

export const Store = () => {
  const store = useSelector((state) => state.store);
  const [forcedLoading, setForcedLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("wisechamps_current_path", window.location.pathname);
    setTimeout(() => {
      setForcedLoading(false);
    }, 5000);
  }, []);

  if (!store || store === "") {
    window.scrollTo({ top: 0 });
    return (
      <Box
        height={["95vh", "95vh", "95vh", "98vh"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text>
          <Text mb={4}>The Reward Store will be available soon..</Text>
          <Link style={{ fontSize: "13px" }} to={"/dashboard"} id="submit-btn">
            Try Again
          </Link>
        </Text>
      </Box>
    );
  }

  return (
    <Box height={"90vh"} maxHeight={"90vh"}>
      {forcedLoading && (
        <Box
          height={"90vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Loading />
        </Box>
      )}
      <iframe
        src={store}
        title="Pointagram"
        style={{
          border: 0,
          margin: 0,
          height: "100vh",
          width: "100vw",
          opacity: forcedLoading ? 0 : 1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {" "}
      </iframe>
    </Box>
  );
};
