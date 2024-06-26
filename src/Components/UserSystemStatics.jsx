import { Box, Tag } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const UserSystemStatics = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        gap={"7px"}
        mt={"8px"}
        flexWrap={"wrap"}
      >
        <Tag
          size={["md", "md", "lg", "lg", "lg"]}
          colorScheme="purple"
          fontSize={["9px", "9px", "12px", "14px"]}
        >
          Coins : {user.coins}
        </Tag>
        <Tag
          size={["md", "md", "lg", "lg", "lg"]}
          colorScheme="purple"
          fontSize={["9px", "9px", "12px", "14px"]}
          fontWeight={500}
        >
          Quiz Taken : {user.quizzes}
        </Tag>
        <Tag
          size={["md", "md", "lg", "lg", "lg"]}
          colorScheme="purple"
          fontSize={["9px", "9px", "12px", "14px"]}
        >
          Grade : {user.grade}
        </Tag>
        {/* <Tag
          colorScheme="purple"
          fontSize={["9px", "9px", "12px", "14px"]}
          fontWeight={500}
        >
          Age in system :{" "}
          {user.age >= 365
            ? Math.floor(user.age / 365) > 1
              ? `${Math.floor(user.age / 365)} years`
              : `${Math.floor(user.age / 365)} year`
            : user.age >= 30
            ? Math.floor(user.age / 30) > 1
              ? `${Math.floor(user.age / 30)} months`
              : `${Math.floor(user.age / 30)} month`
            : `${user.age} days`}{" "}
        </Tag> */}
      </Box>
    </>
  );
};
