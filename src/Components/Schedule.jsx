import {
  Box,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Schedule = () => {
  const [tempDate, setTempDate] = useState([]);
  const session = useSelector((state) => state.user.session);

  const getDateAndTime = (dateTime) => {
    const date = new Date(dateTime);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${hours}${ampm}`;
    return formattedDate;
  };

  function getCurrentWeekDays() {
    const result = [];
    const today = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDayIndex = today.getDay();
    let thursdayOffset = 4 - currentDayIndex;
    if (thursdayOffset < 0) {
      thursdayOffset += 0;
    } else if (currentDayIndex === 0) {
      thursdayOffset -= 7;
    }
    for (let i = thursdayOffset; i < thursdayOffset + 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = daysOfWeek[date.getDay()];
      const month = months[date.getMonth()];
      const day = date.getDate();
      result.push(`${dayOfWeek}, ${month} ${day}`);
    }
    return result;
  }

  useEffect(() => {
    if (!session[0]) {
      setTempDate(getCurrentWeekDays());
    }
  }, []);

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
                <Text fontSize={["10px", "10px", "13px", "13px"]}>Topic</Text>
              </Th>
              <Th>
                <Text fontSize={["10px", "10px", "13px", "13px"]}>Subject</Text>
              </Th>
              <Th
                minWidth={[
                  "150px !important",
                  "150px !important",
                  "180px !important",
                  "200px !important",
                  "200px !important",
                ]}
              >
                <Text fontSize={["10px", "10px", "13px", "13px"]}>
                  Date & Time
                </Text>
              </Th>
              {/* <Th>
                <Text fontSize={["10px", "10px", "13px", "13px"]}>Topic</Text>
              </Th> */}
            </Tr>
          </Thead>
          <Tbody fontSize={["11px", "11px", "13px", "15px"]}>
            <Tr>
              <Td width={"100%"}>
                {session[0] ? session[0].Session_Name : "Science Live Quiz"}
              </Td>
              <Td>Science</Td>
              <Td>
                {session[0]
                  ? `${getDateAndTime(session[0].Session_Date_Time)}`
                  : tempDate[0]}
              </Td>
            </Tr>
            <Tr>
              <Td width={"100%"}>
                {session[1] ? session[1].Session_Name : "Maths Live Quiz"}
              </Td>
              <Td>Maths</Td>
              <Td>
                {session[1]
                  ? `${getDateAndTime(session[1].Session_Date_Time)}`
                  : tempDate[1]}
              </Td>
            </Tr>
            <Tr>
              <Td width={"100%"}>
                {session[2] ? session[2].Session_Name : "Maths Live Quiz"}
              </Td>
              <Td>Maths</Td>
              <Td>
                {session[2]
                  ? `${getDateAndTime(session[2].Session_Date_Time)}`
                  : tempDate[2]}
              </Td>
            </Tr>
            <Tr>
              <Td width={"100%"}>
                {session[3] ? session[3].Session_Name : "Maths Live Quiz"}
              </Td>
              <Td>Maths</Td>
              <Td>
                {session[3]
                  ? `${getDateAndTime(session[3].Session_Date_Time)}`
                  : tempDate[3]}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
