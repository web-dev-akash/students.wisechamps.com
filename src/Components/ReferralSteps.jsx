import {
  Box,
  Image,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import success from "../assets/success.png";
import inactive from "../assets/active.png";
import waiting from "../assets/waiting.png";

export const ReferralSteps = ({ quizAttempted }) => {
  const steps = [
    {
      title:
        quizAttempted > 0 ? "First Quiz Attempted" : "First Quiz Not Attempted",
      description:
        quizAttempted > 0
          ? `You won free 5 quiz balance`
          : "Not eligible for the 5 quiz balance",
    },
    {
      title:
        quizAttempted >= 5 ? "5 Quizzes Attempted" : "5 Quizzes Not Attempted",
      description:
        quizAttempted >= 5
          ? `Congratulations! You won a ₹300 Amazon Voucher`
          : "Not eligible for the voucher",
    },
  ];
  const { activeStep } = useSteps({
    index:
      quizAttempted > 0 && quizAttempted < 5 ? 1 : quizAttempted >= 5 ? 2 : 0,
    count: steps.length,
  });
  return (
    <Stepper
      mt={3}
      size={"sm"}
      index={activeStep}
      gap={0}
      orientation={"vertical"}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<Image src={success} alt="✅" />}
              incomplete={<Image src={inactive} alt="✅" />}
              active={<Image src={waiting} alt="✅" />}
            />
          </StepIndicator>
          <Box>
            <StepTitle fontSize={["12px", "12px", "13px", "13px"]}>
              {step.title}
            </StepTitle>
            <StepDescription
              fontSize={["11px", "11px", "13px", "13px"]}
              style={{ marginBottom: "25px" }}
            >
              {step.description}
            </StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
