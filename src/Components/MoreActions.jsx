import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MoreActions = () => {
  const { user } = useSelector((state) => state);
  return (
    <Box
      background="white"
      border={"1px solid #4E46E4"}
      padding={"1rem"}
      borderRadius={"10px"}
    >
      <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
        More Actions
      </Text>
      <Box>
        <Button
          onClick={() =>
            window.location.assign(
              `https://quizbalance.wisechamps.com/?email=${user.email}`
            )
          }
          mt={3}
          bg={"#4E46E4"}
          color={"white"}
          fontSize={["13px", "13px", "15px", "15px"]}
          fontWeight={400}
          width={"100%"}
        >
          Add Quiz Balance
        </Button>
        <Button
          onClick={() =>
            (window.location.href = `https://wa.me?text=Hi!%20I%20am%20learning%20a%20lot%20through%20Wisechamps%20Final%20Exam%20Practice%20Sessions.%20These%20quizzes%20are%20FUN%20%26%20INTERESTING%20way%20of%20LEARNING%20regularly.%20%0A%0AI%20am%20sure%20this%20time%20I%20will%20Ace%20my%20final%20Math%20and%20Science%20Exams.%0A%0AWinners%20also%20get%20gifts!%20So%20Don%27t%20Miss%20out...%0A%0AClick%20here%20to%20register%20your%20name%20and%20participate%20in%20free%20sessions%20%F0%9F%91%87%0Ahttps%3A%2F%2Freferral.wisechamps.com%3FrefereeId%3D${user.phone}%20%0A%0ASee%20you%20there%20%F0%9F%92%A1`)
          }
          mt={3}
          bg={"#4E46E4"}
          color={"white"}
          fontSize={["13px", "13px", "15px", "15px"]}
          fontWeight={400}
          width={"100%"}
        >
          Invite a Cousin / Friend
        </Button>

        <Button
          mt={3}
          bg={"#4E46E4"}
          color={"white"}
          fontSize={["13px", "13px", "15px", "15px"]}
          fontWeight={400}
          width={"100%"}
        >
          <Link style={{ width: "100%" }} to={"/dashboard/store"}>
            Redeem Coins
          </Link>
        </Button>

        <Button
          onClick={() =>
            window.location.assign(
              `https://report.wisechamps.com/?email=${user.email}`
            )
          }
          mt={3}
          bg={"#4E46E4"}
          color={"white"}
          fontSize={["13px", "13px", "15px", "15px"]}
          fontWeight={400}
          width={"100%"}
        >
          View Report
        </Button>
      </Box>
    </Box>
  );
};
