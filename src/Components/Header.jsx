import React from "react";
import logo from "../assets/logo.png";
import { Box, Tag } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user, mode } = useSelector((state) => state);
  return (
    <Box>
      <header
        className="animate__animated animate__fadeInLeft"
        style={{
          position: "absolute",
          top: "0.7rem",
          left: "15px",
        }}
      >
        <img src={logo} alt="Wisechamps" width={"100px"} />
      </header>
      {mode === "user" && (
        <Box
          className="animate__animated animate__fadeInRight"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
          position={"absolute"}
          top={"1rem"}
          right={"15px"}
        >
          <Tag
            colorScheme="purple"
            fontSize={["10px", "10px", "15px", "15px"]}
            fontWeight={500}
          >
            Quiz Taken : {user.quizzes}
          </Tag>
          <Tag colorScheme="purple" fontSize={["10px", "10px", "15px", "15px"]}>
            Quiz Balance : {user.credits}
          </Tag>
          {/* <Tag colorScheme="purple" fontSize={["10px", "10px", "15px", "15px"]}>
            Coins : {user.coins}
          </Tag> */}
        </Box>
      )}
    </Box>
  );
};
