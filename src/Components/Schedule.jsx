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

export const Schedule = () => {
  return (
    <Box
      background="white"
      border={"1px solid #4E46E4"}
      padding={"1rem"}
      borderRadius={"10px"}
    >
      <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
        Quiz Schedule
      </Text>
      <TableContainer
        width={"100%"}
        maxWidth={"100%"}
        border={"1px solid #cccffcca"}
        borderRadius={"10px"}
        mt={4}
      >
        <Table variant="striped" colorScheme="purple">
          <Thead>
            <Tr>
              <Th fontSize={"15px"} fontWeight={500}>
                Day
              </Th>
              <Th fontSize={"15px"} fontWeight={500}>
                Time
              </Th>
            </Tr>
          </Thead>
          <Tbody fontSize={["12px", "12px", "15px", "15px"]}>
            <Tr>
              <Td>Thursday</Td>
              <Td>7PM - 8PM</Td>
            </Tr>
            <Tr>
              <Td>Friday</Td>
              <Td>7PM - 8PM</Td>
            </Tr>
            <Tr>
              <Td>Saturday</Td>
              <Td>7PM - 8PM</Td>
            </Tr>
            <Tr>
              <Td>Sunday</Td>
              <Td>11AM - 12AM</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
