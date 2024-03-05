import { Box, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Components/Header";
import { useSelector } from "react-redux";
import { GiTwoCoins } from "react-icons/gi";

export const Coins = () => {
  const coinsHistory = useSelector((state) => state.user.coinsHistory);

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
        gap={"10px"}
      >
        {coinsHistory.map(
          ({ Coins, Updated_Date, id, Action_Type, Description }) => (
            <Box
              border={"1px solid #4E46E4"}
              key={id}
              bg={"white"}
              borderRadius={"10px"}
              padding={"1rem"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontWeight={600} fontSize={"14px"}>
                    {Action_Type === "Credit"
                      ? `Coins Added`
                      : `Coins Deducted`}
                  </Text>
                  <Text fontSize={["11px", "11px", "11px", "13px"]}>
                    {Description}
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    fontSize={"20px"}
                  >
                    <Text
                      color={Action_Type === "Credit" ? "#12ca21" : "#da1f2f"}
                    >
                      {Action_Type === "Credit" ? `+${Coins}` : `-${Coins}`}
                    </Text>
                    <GiTwoCoins
                      color={Action_Type === "Credit" ? "#12ca21" : "#da1f2f"}
                    />
                  </Text>
                  <Text fontSize={"11px"}>
                    {new Date(Updated_Date).toLocaleDateString("en", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </Text>
                </Box>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};
