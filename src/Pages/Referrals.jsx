import { Box, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import { Header } from "../Components/Header";
import { useSelector } from "react-redux";
import { ReferralSteps } from "../Components/ReferralSteps";
import referral from "../assets/referral.png";
import { FaCheckCircle } from "react-icons/fa";

export const Referrals = () => {
  const referrals = useSelector((state) => state.user.referrals);
  return (
    <Box padding={"1.5rem 15px 1rem 15px"}>
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
        gap={"10px"}
      >
        <Box
          gridColumn={["unset", "unset", "1 / span 2", "1 / span 2"]}
          width={"100%"}
          border={"1px solid #4E46E4"}
          borderRadius={"10px"}
          padding={"15px"}
          // display={"flex"}
          // justifyContent={"center"}
        >
          <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
            Coin System
          </Text>
          <List spacing={2} fontSize={["12px", "12px", "14px", "15px"]} mt={2}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="#4E46E4" fontSize={"15px"} />
              When referral takes the first quiz you will get 300 coins (₹30)
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="#4E46E4" fontSize={"15px"} />
              When Referral takes first 8 quizzes you will get 1500 coins (₹150)
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="#4E46E4" fontSize={"15px"} />
              Additionally, when 5 Referrals take first 8 quizzes each, you will
              get 5000 coins (₹500)
            </ListItem>
          </List>
          {/* <Image
            src={referral}
            alt="Referral benefits"
            width={"100%"}
            maxWidth={"500px"}
            border={"1px solid #4E46E4"}
            borderRadius={"10px"}
          /> */}
        </Box>

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
                width={
                  quizAttempted >= 8
                    ? `100%`
                    : quizAttempted === 4
                    ? `${quizAttempted * 14}%`
                    : `${quizAttempted * 12.5}%`
                }
                borderRadius={"50px"}
                zIndex={0}
              ></Box>
              <Text
                fontSize={"13px"}
                position={"relative"}
                top={"-21px"}
                color={quizAttempted < 4 ? "black" : "white"}
                zIndex={1}
              >
                {quizAttempted >= 8 ? 8 : quizAttempted}/8
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
