import { Box, Button, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ReferralComponent = () => {
  const { user } = useSelector((state) => state);
  return (
    <Box
      background="white"
      border={"1px solid #4E46E4"}
      padding={"1rem"}
      borderRadius={"10px"}
    >
      <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
        Referral
      </Text>
      <Text fontSize={["12px", "12px", "15px", "15px"]} fontWeight={500}>
        You have successfully referred{" "}
        <Tag
          fontSize={["13px", "13px", "15px", "15px"]}
          position={"relative"}
          bottom={"2px"}
          colorScheme="purple"
        >
          {user.referrals.length}
        </Tag>{" "}
        friends or cousins.
      </Text>
      {user.referrals.length > 0 && (
        <Button
          mt={3}
          bg={"#4E46E4"}
          color={"white"}
          fontSize={"13px"}
          fontWeight={400}
          width={"100%"}
        >
          <Link style={{ width: "100%" }} to={"/dashboard/referrals"}>
            View Referral Details
          </Link>
        </Button>
      )}
    </Box>
  );
};
