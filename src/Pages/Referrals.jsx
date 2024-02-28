import {
  Box,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import { Header } from "../Components/Header";
import { useSelector } from "react-redux";

export const Referrals = () => {
  const { referrals } = useSelector((state) => state.user);
  return (
    <Box width={"92%"} padding={"2.5rem 0 1rem 0"}>
      <Header />
      <Box
        className="animate__animated animate__fadeInUp"
        mt={"20px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
      >
        {referrals.map(
          ({ Student_Name, Phone, id, Student_Grade, quizAttempted }) => (
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
              {quizAttempted > 0 && (
                <Tag mt={2} colorScheme={"whatsapp"} fontSize={"10px"}>
                  +5 Quiz Balance
                </Tag>
              )}
              {quizAttempted >= 5 && (
                <Tag mt={2} ml={2} colorScheme={"whatsapp"} fontSize={"10px"}>
                  ₹300 Voucher
                </Tag>
              )}
              <Box
                width={"100%"}
                backgroundColor={"#e1dfff"}
                borderRadius={"50px"}
                overflow={"hidden"}
                mt={4}
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
                  position={"relative"}
                  top={"-22px"}
                  color={quizAttempted < 3 ? "black" : "white"}
                  zIndex={1}
                >
                  {quizAttempted}/5
                </Text>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};
