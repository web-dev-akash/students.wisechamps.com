import React from "react";
import logo from "../assets/logo.png";
import { Box, Button, Tag, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMode } from "../Redux/action";

export const Header = ({ hidetags }) => {
  const user = useSelector((state) => state.user);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    localStorage.removeItem("wise_email");
    dispatch(setMode(""));
  };

  return (
    <Box>
      <header
        className="animate__animated animate__fadeInLeft"
        style={{
          position: "absolute",
          top: "0.6rem",
          left: "15px",
        }}
      >
        <img src={logo} alt="Wisechamps" width={"90px"} />
      </header>
      {mode === "user" && (
        <Box
          className="animate__animated animate__fadeInRight"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8px"}
          position={"absolute"}
          top={"12px"}
          right={"15px"}
        >
          {hidetags ? (
            <Link to={"/dashboard"}>
              <Text
                fontSize={["11px", "11px", "13px", "14px"]}
                padding={"1px 10px"}
                background={"#4E46E4"}
                border={"1px solid #4E46E4"}
                borderRadius={"5px"}
                color={"white"}
              >
                Dashboard
              </Text>
            </Link>
          ) : (
            <>
              <Tag
                colorScheme="purple"
                fontSize={["9px", "9px", "12px", "14px"]}
              >
                Quiz Balance : {user.credits}
              </Tag>
              <Button
                fontSize={["10px", "10px", "13px", "15px"]}
                width={["60px", "60px", "70px", "80px"]}
                height={["25px", "25px", "25px", "30px"]}
                background={"#4e46e4"}
                color={"white"}
                onClick={handleLogoutClick}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};
