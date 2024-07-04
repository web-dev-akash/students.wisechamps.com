import React from "react";
import logo from "../assets/logo.png";
import { Box, Button, Image, Tag, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMode } from "../Redux/action";

export const Header = ({ hidetags, showStore, bgWhite }) => {
  const user = useSelector((state) => state.user);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    localStorage.removeItem("wise_email");
    dispatch(setMode(""));
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={bgWhite ? "fixed" : "absolute"}
      width={"100%"}
      padding={
        bgWhite
          ? [
              "15px 11px 35px 11px",
              "15px 11px 35px 11px",
              "15px 11px 30px 11px",
              "15px 11px 15px 11px",
              "15px 11px 20px 11px",
            ]
          : ["10px 11px", "10px 11px", "5px 11px", "5px 11px"]
      }
      bg={bgWhite ? "white" : ""}
      top={0}
      left={0}
      zIndex={99999}
    >
      <header className="animate__animated animate__fadeInLeft">
        <Image
          src={logo}
          alt="Wisechamps"
          width={["110px", "120px", "150px", "160px"]}
        />
      </header>
      {mode === "user" && (
        <Box
          className="animate__animated animate__fadeInRight"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"7px"}
        >
          {hidetags ? (
            <>
              <Link to={"/dashboard"}>
                <Text
                  fontSize={["11px", "11px", "13px", "14px"]}
                  padding={"3px 10px"}
                  background={"#4E46E4"}
                  border={"1px solid #4E46E4"}
                  borderRadius={"5px"}
                  color={"white"}
                >
                  Dashboard
                </Text>
              </Link>
              <Link to={showStore ? "/dashboard/store" : "/dashboard/orders"}>
                <Text
                  fontSize={["11px", "11px", "13px", "14px"]}
                  padding={"3px 10px"}
                  background={"#4E46E4"}
                  border={"1px solid #4E46E4"}
                  borderRadius={"5px"}
                  color={"white"}
                >
                  {showStore ? "Gift Store" : "My Orders"}
                </Text>
              </Link>
            </>
          ) : (
            <>
              <Tag
                size={["md", "md", "lg", "lg", "lg"]}
                colorScheme="purple"
                fontSize={["9px", "9px", "12px", "14px"]}
              >
                Quiz Balance : {user.credits}
              </Tag>
              <Button
                fontSize={["10px", "10px", "13px", "13px"]}
                width={["65px", "65px", "75px", "80px"]}
                height={["25px", "25px", "32px", "32px"]}
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
