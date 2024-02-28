import { Box, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const UserSystemStatics = () => {
  const { user } = useSelector((state) => state);
  return (
    <Box
      display={"grid"}
      gap={[2, 2, 5, 5]}
      gridTemplateColumns={["repeat(2, 1fr)"]}
    >
      <Box
        background="white"
        border={"1px solid #4E46E4"}
        padding={"1rem 0.8rem"}
        borderRadius={"10px"}
      >
        <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
          Quizzes
        </Text>
        <Text
          fontSize={["12px", "12px", "15px", "15px"]}
          mt={"5px"}
          fontWeight={500}
        >
          You have completed a total of{" "}
          <Tag
            fontSize={["12px", "12px", "15px", "15px"]}
            bottom={"2px"}
            position={"relative"}
            colorScheme="purple"
          >
            {user.quizzes}
          </Tag>{" "}
          quiz so far.
        </Text>
      </Box>
      <Box
        height={"100%"}
        background="white"
        border={"1px solid #4E46E4"}
        padding={"1rem 0.8rem"}
        borderRadius={"10px"}
      >
        <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
          Age
        </Text>
        <Text
          fontSize={["12px", "12px", "15px", "15px"]}
          mt={"5px"}
          fontWeight={500}
        >
          You have been a member with us for{" "}
          <Tag
            fontSize={["11px", "11px", "14px", "14px"]}
            bottom={"2px"}
            position={"relative"}
            colorScheme="purple"
          >
            {user.age >= 365
              ? `${Math.floor(user.age / 365)} years`
              : user.age >= 30
              ? `${Math.floor(user.age / 30)} months`
              : `${user.age} days`}
          </Tag>{" "}
          now.
        </Text>
      </Box>
    </Box>
  );
};
