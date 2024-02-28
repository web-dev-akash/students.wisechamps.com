import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../Redux/action";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SessionNotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMode(""));
  }, []);
  return (
    <Box textAlign={"center"} fontSize={["12px", "12px", "18px", "18px"]}>
      <h1>No Class Available</h1>
      <p style={{ marginBottom: "20px" }}>
        There is not active Class / Session at this moment.
      </p>
      <Link
        to={"/"}
        id="submit-btn"
        style={{
          padding: "0.7rem 2rem",
        }}
      >
        Try Again
      </Link>
    </Box>
  );
};
