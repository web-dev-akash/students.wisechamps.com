import { Box, Tag, Text } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import { Header } from "../Components/Header";
import { useSelector } from "react-redux";
import { ReferralSteps } from "../Components/ReferralSteps";

export const Referrals = () => {
  const referrals = useSelector((state) => state.user.referrals);
  return (
    <Box padding={"2.5rem 15px 1rem 15px"}>
      <Header hidetags={true} />
      <Box
        className="animate__animated animate__fadeInUp"
        mt={"20px"}
        display={"grid"}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={"20px"}
      >
        {referrals.map(({ Student_Name, Phone, id, quizAttempted }) => (
          <Box
            border={"1px solid #4E46E4"}
            key={id}
            bg={"white"}
            minHeight={"100px"}
            borderRadius={"10px"}
            padding={"1rem"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={["15px", "15px", "18px", "18px"]}>
                {Student_Name}
              </Text>
              <Text
                fontSize={"12px"}
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
              >
                <FaPhoneAlt />
                <Text>{Phone}</Text>
              </Text>
            </Box>
            <Box>
              <ReferralSteps quizAttempted={quizAttempted} />
            </Box>
            <Box
              width={"100%"}
              backgroundColor={"#e1dfff"}
              borderRadius={"50px"}
              overflow={"hidden"}
              mt={"-10px"}
              height={"30px"}
              position={"relative"}
              textAlign={"center"}
              padding={"4px"}
            >
              <Box
                background={"#4E46E4"}
                height={"100%"}
                width={`${quizAttempted * 20}%`}
                borderRadius={"50px"}
                zIndex={0}
              ></Box>
              <Text
                fontSize={"13px"}
                position={"relative"}
                top={"-21px"}
                color={quizAttempted < 3 ? "black" : "white"}
                zIndex={1}
              >
                {quizAttempted}/5
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
