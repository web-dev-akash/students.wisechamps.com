import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector } from "react-redux";

export const CustomAlert = () => {
  const { user, alert } = useSelector((state) => state);
  const ref = useRef(null);

  console.log("Alert is ", alert);

  return (
    <Box
      top={"15px"}
      left={"0"}
      position={"absolute"}
      width={"100%"}
      padding={"0 12px"}
      display={"flex"}
      justifyContent={"center"}
      zIndex={1}
      ref={ref}
      className="animate__animated animate__fadeInDown"
    >
      <Alert
        boxShadow={"10px 10px 10px 50rem rgb(0 0 0 / 50%)"}
        padding={"15px 20px"}
        maxWidth={"400px"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        variant="subtle"
        status={
          alert === "credits"
            ? "error"
            : alert === "aboutToStart"
            ? "info"
            : alert === "inProgress"
            ? "success"
            : "warning"
        }
        borderRadius={"10px"}
        position={"relative"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"5px"}
        >
          <AlertIcon margin={0} />
          <AlertTitle>
            {alert === "credits"
              ? "Quiz Balance Exosted"
              : alert === "aboutToStart"
              ? "Join Meeting Now"
              : alert === "inProgress"
              ? "Quiz in Progress"
              : "Low Quiz Balance"}
          </AlertTitle>
        </Box>
        <AlertDescription>
          {alert === "credits" ? (
            <>
              <Text fontSize={["13px", "13px", "15px", "15px"]} m={"5px 0"}>
                You have 0 quiz balance left. Add more to join today's quiz.
              </Text>
              <Button
                fontSize={"13px"}
                margin={"10px 0 5px 0"}
                width={"100%"}
                bg={"white"}
                border={"none"}
                onClick={() =>
                  window.location.assign(
                    `https://quizbalance.wisechamps.com?email=${user.email}`
                  )
                }
              >
                Add Quiz Balance
              </Button>
            </>
          ) : alert === "aboutToStart" ? (
            <>
              <Text fontSize={["13px", "13px", "15px", "15px"]} m={"5px 0"}>
                Meeting is about to start in some time. Click the below button
                to join today's quiz
              </Text>
              <Button
                fontSize={"13px"}
                margin={"10px 0 5px 0"}
                width={"100%"}
                bg={"white"}
                border={"none"}
                onClick={() =>
                  window.location.assign(
                    `https://zoom.wisechamps.com?email=${user.email}`
                  )
                }
              >
                Join Meeting Now
              </Button>
            </>
          ) : alert === "inProgress" ? (
            <>
              <Text fontSize={["13px", "13px", "15px", "15px"]} m={"5px 0"}>
                Quiz has already started. Click the below button to join today's
                quiz.
              </Text>
              <Button
                fontSize={"13px"}
                margin={"10px 0 5px 0"}
                width={"100%"}
                bg={"white"}
                border={"none"}
                onClick={() =>
                  window.location.assign(
                    `https://zoom.wisechamps.com?email=${user.email}`
                  )
                }
              >
                Join Quiz Now
              </Button>
            </>
          ) : (
            <>
              <Text fontSize={["13px", "13px", "15px", "15px"]} m={"5px 0"}>
                You have {user.credits} quiz balance left. Add more to enjoy
                uninterrupted quiz.
              </Text>
              <Button
                fontSize={"13px"}
                margin={"10px 0 5px 0"}
                width={"100%"}
                bg={"white"}
                border={"none"}
                onClick={() =>
                  window.location.assign(
                    `https://quizbalance.wisechamps.com?email=${user.email}`
                  )
                }
              >
                Add Quiz Balance
              </Button>
            </>
          )}
        </AlertDescription>
        <CloseButton
          position={"absolute"}
          top={"2px"}
          right={"2px"}
          onClick={() => {
            ref.current.style.display = "none";
          }}
        />
      </Alert>
    </Box>
  );
};
