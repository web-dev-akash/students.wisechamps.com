import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useEffect } from "react";
import { Header } from "../Components/Header";
import { useSelector } from "react-redux";
import { ReferralSteps } from "../Components/ReferralSteps";
import { GiTwoCoins } from "react-icons/gi";

export const Referrals = () => {
  const referrals = useSelector((state) => state.user.referrals);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    localStorage.setItem("wisechamps_current_path", window.location.pathname);
  }, []);

  return (
    <Box
      padding={"1.5rem 15px 5rem 15px"}
      minHeight={["auto", "auto", "100vh", "100vh"]}
    >
      <Header hidetags={true} />
      <Box
        className="animate__animated animate__fadeInUp"
        mt={"25px"}
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
        >
          <Accordion
            defaultIndex={referrals.length === 0 ? [0] : null}
            allowToggle
          >
            <AccordionItem border={"1px solid #4e46e4"} borderRadius={"10px"}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={["13px", "13px", "14px", "15px"]}
                    padding={"3px 0"}
                  >
                    How does the coin system work
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <TableContainer whiteSpace={"none"} maxWidth={"100%"}>
                  <Table
                    variant="striped"
                    bg={"white"}
                    colorScheme="purple"
                    fontSize={["11px", "11px", "13px", "14px"]}
                  >
                    <TableCaption padding={"10px 0"} m={0}>
                      <Text fontSize={["13px", "13px", "14px", "15px"]}>
                        Note : 10 Coins = ₹1
                      </Text>
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>
                          <Text>Criteria</Text>
                        </Th>
                        <Th>
                          <Text>Coins</Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Referral takes the first quiz</Td>
                        <Td>
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            gap={"5px"}
                          >
                            300{" "}
                            <GiTwoCoins
                              color={"gold"}
                              style={{
                                filter:
                                  "drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.9))",
                              }}
                            />
                          </Text>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Referral takes first 8 quizzes</Td>
                        <Td>
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            gap={"5px"}
                          >
                            3000{" "}
                            <GiTwoCoins
                              color={"gold"}
                              style={{
                                filter:
                                  "drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.9))",
                              }}
                            />
                          </Text>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          5 Referrals take first 8 quizzes each ( Get Additional
                          Coins )
                        </Td>
                        <Td>
                          <Text
                            display={"flex"}
                            alignItems={"center"}
                            gap={"5px"}
                          >
                            5000{" "}
                            <GiTwoCoins
                              color={"gold"}
                              style={{
                                filter:
                                  "drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.9))",
                              }}
                            />
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {referrals.length === 0 && (
          <Box
            gridColumn={["unset", "unset", "1 / span 2", "1 / span 2"]}
            minHeight={["300px", "300px", "300px", "200px", "300px"]}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontWeight={700}
              fontSize={["30px"]}
              textAlign={"center"}
              opacity={0.3}
            >
              No Referrals <br /> Found
            </Text>
          </Box>
        )}

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
      <Box
        className="animate__animated animate__fadeInUp"
        width={"100%"}
        display={"flex"}
        boxSizing="border-box"
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"rgba(255, 255, 255, .15)"}
        position={"fixed"}
        bottom={0}
        left={0}
        height={"65px"}
        borderRadius={"10px 10px 0 0"}
        padding={"0 12px"}
        boxShadow={"0 0 20px 10px rgba(0, 0, 0, 0.6)"}
        backdropFilter={"blur(3px)"}
      ></Box>
      <Box
        className="animate__animated animate__fadeInUp"
        width={"100%"}
        display={"flex"}
        boxSizing="border-box"
        justifyContent={"center"}
        alignItems={"center"}
        background={"transparent"}
        position={"fixed"}
        bottom={0}
        left={0}
        height={"65px"}
        borderRadius={"10px 10px 0 0"}
        padding={"0 12px"}
      >
        <Button
          mb={"10px"}
          onClick={() =>
            (window.location.href = `https://wa.me?text=Hi!%20I%20am%20learning%20a%20lot%20through%20Wisechamps%20Olympiad%20Practice%20Sessions.%20These%20quizzes%20are%20FUN%20%26%20INTERESTING%20way%20of%20LEARNING%20regularly.%20%0A%0AI%20am%20sure%20this%20time%20I%20will%20Ace%20my%20Qlympiad%20Math%20and%20Science%20Exams.%0A%0AWinners%20also%20get%20gifts!%20So%20Don%27t%20Miss%20out...%0A%0AClick%20here%20to%20register%20your%20name%20and%20participate%20in%20free%20sessions%20%F0%9F%91%87%0Ahttps%3A%2F%2Fregister.wisechamps.com%3FrefereeId%3D${user.phone}%20%0A%0ASee%20you%20there%20%F0%9F%92%A1`)
          }
          mt={3}
          bg={"#4E46E4"}
          color={"white"}
          fontSize={"13px"}
          fontWeight={400}
          width={"100%"}
        >
          Invite a Cousin / Friend
        </Button>
      </Box>
    </Box>
  );
};
