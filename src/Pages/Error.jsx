import React, { useEffect } from "react";
import { setMode } from "../Redux/action";
import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Error = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMode(""));
  }, []);
  return (
    <Box textAlign={"center"} fontSize={["12px", "12px", "18px", "18px"]}>
      <h1 style={{ marginBottom: "20px" }}>Something Went Wrong..</h1>
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
