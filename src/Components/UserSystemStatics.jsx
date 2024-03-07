import { Box, Tag } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const UserSystemStatics = () => {
  const user = useSelector((state) => state.user);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      gap={2}
      mt={"10px"}
    >
      <Tag
        colorScheme="purple"
        fontSize={["10px", "10px", "15px", "15px"]}
        fontWeight={500}
      >
        Quiz Taken : {user.quizzes}
      </Tag>

      <Tag
        colorScheme="purple"
        fontSize={["10px", "10px", "15px", "15px"]}
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
      </Tag>
    </Box>
  );
};
