import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Schedule = () => {
  const session = useSelector((state) => state.user.session);
  return (
    <Box background="white" border={"1px solid #4E46E4"} borderRadius={"10px"}>
      <Text
        m={"1rem 0 0 1rem"}
        fontWeight={700}
        fontSize={["15px", "15px", "18px", "18px"]}
      >
        Quiz Schedule
      </Text>
      <TableContainer
        width={"100%"}
        maxWidth={"100%"}
        borderRadius={"0 0 10px 10px"}
        whiteSpace={"none"}
        mt={4}
      >
        <Table variant="striped" colorScheme="purple" className="scheduleTable">
          <Thead
            borderTop={"1px solid #cccffc"}
            fontSize={["11px", "11px", "13px", "15px"]}
          >
            <Tr>
              <Th>
                <Text fontSize={["10px", "10px", "13px", "15px"]}>Topic</Text>
              </Th>
              <Th>
                <Text fontSize={["10px", "10px", "13px", "15px"]}>Day</Text>
              </Th>
              <Th>
                <Text fontSize={["10px", "10px", "13px", "15px"]}>Time</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody fontSize={["11px", "11px", "13px", "15px"]}>
            <Tr>
              <Td width={"100%"}>
                {session[0] ? session[0].Session_Name : "Science Live Quiz"}
              </Td>
              <Td>Thursday</Td>
              <Td>7PM</Td>
            </Tr>
            <Tr>
              <Td width={"100%"}>
                {session[1] ? session[1].Session_Name : "Maths Live Quiz"}
              </Td>
              <Td>Friday</Td>
              <Td>7PM</Td>
            </Tr>
            <Tr>
              <Td width={"100%"}>
                {session[2] ? session[2].Session_Name : "Maths Live Quiz"}
              </Td>
              <Td>Saturday</Td>
              <Td>7PM</Td>
            </Tr>
            <Tr>
              <Td width={"100%"}>
                {session[3] ? session[3].Session_Name : "Maths Live Quiz"}
              </Td>
              <Td>Sunday</Td>
              <Td>11AM</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
