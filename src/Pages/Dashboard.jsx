import { Box, Image, Tag, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header";
import hi from "../assets/hi.gif";
import { ReferralComponent } from "../Components/ReferralComponent";
import { UserSystemStatics } from "../Components/UserSystemStatics";
import { MoreActions } from "../Components/MoreActions";
import { getOrders, getProducts, setAlert } from "../Redux/action";
import { CarousalMain } from "../Components/CarousalMain";
import { Pricing } from "../Components/Pricing";
import { Footer } from "../Components/Footer";
import { CoinsComponent } from "../Components/CoinsComponent";
import active from "../assets/active_badge.png";
import regular from "../assets/regular_badge.png";
import { WeeklyQuiz } from "../Components/WeeklyQuiz";

export const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const weeklyQuizzes = useSelector((state) => state.user.weeklyQuizzes);
  const alert = useSelector((state) => state.alert);
  const newUser = useSelector((state) => state.user.newUser);
  const timersRef = useRef([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const now = new Date();
    const initialIndex = weeklyQuizzes.findIndex((quiz) => {
      const quizDate = new Date(quiz.Session_Date_Time);
      return quizDate.toDateString() === now.toDateString();
    });
    const sessionDateTimeStr =
      initialIndex === -1 ? 0 : weeklyQuizzes[initialIndex].Session_Date_Time;
    const sessionDate = new Date(sessionDateTimeStr);
    const sessionTime = sessionDate.getTime();

    const twentyMinutesBefore = new Date(sessionTime - 350 * 60 * 1000);
    const zeroMinutesAfter = new Date(sessionTime - 5 * 60 * 1000);

    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];

    if (now >= twentyMinutesBefore && now <= zeroMinutesAfter) {
      if (newUser && !alert.includes("newToWisechamps")) {
        const newAlerts = ["newToWisechamps", ...alert];
        dispatch(setAlert(newAlerts));
      }
    } else {
      if (alert.includes("newToWisechamps")) {
        const newAlerts = alert.filter((item) => item !== "newToWisechamps");
        dispatch(setAlert(newAlerts));
      }
    }

    if (now < twentyMinutesBefore) {
      timersRef.current.push(
        setTimeout(() => {
          if (!alert.includes("newToWisechamps")) {
            const newAlerts = ["newToWisechamps", ...alert];
            dispatch(setAlert(newAlerts));
          }
        }, twentyMinutesBefore - now)
      );
    }

    if (now < zeroMinutesAfter) {
      timersRef.current.push(
        setTimeout(() => {
          if (alert.includes("newToWisechamps")) {
            const newAlerts = alert.filter(
              (item) => item !== "newToWisechamps"
            );
            dispatch(setAlert(newAlerts));
          }
        }, zeroMinutesAfter - now)
      );
    }

    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, [alert]);

  useEffect(() => {
    dispatch(getOrders(user.id));
    localStorage.setItem("wisechamps_current_path", window.location.pathname);
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <Box
      padding={"2.3rem 11px 1rem 11px"}
      pt={["2.3rem", "2.3rem", "2.7rem", "2.7rem"]}
      paddingInline={"11px"}
      pb={"1rem"}
      className="dashboard"
    >
      <Header />
      <UserSystemStatics />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"10px 0"}
      >
        <Box display={"flex"} gap={"5px"} alignItems={"center"}>
          <Text
            fontSize={["18px", "18px", "22px", "20px", "22px"]}
            fontWeight={400}
            textTransform={"capitalize"}
          >
            Hi, {user.studentName}
          </Text>

          <Image
            position={"relative"}
            bottom={"2px"}
            src={hi}
            alt="👋"
            width={"30px"}
            height={"auto"}
            objectFit={"cover"}
          />
        </Box>
        {user.category && user.category !== "" && (
          <Tag
            size={["md", "md", "lg", "lg", "lg"]}
            fontSize={["11px", "11px", "15px", "15px"]}
            colorScheme={
              user.category === "Active"
                ? "green"
                : user.category === "Regular"
                ? "green"
                : user.category === "Inactive" ||
                  user.category === "AtRisk" ||
                  user.category === "Dropouts"
                ? "red"
                : "linkedin"
            }
          >
            {user.category === "Active" ? (
              <>
                <Text mr={1}>Consistent</Text>
                <Image src={active} alt="" width={"25px"} />
              </>
            ) : user.category === "Regular" ? (
              <>
                <Text ml={1}>Rockstar</Text>
                <Image
                  src={regular}
                  alt=""
                  width={"20px"}
                  transform={"rotate(-45deg)"}
                />
              </>
            ) : user.category === "Inactive" ? (
              "Explorer"
            ) : user.category === "AtRisk" ? (
              "Never give up!"
            ) : user.category === "Dropouts" ? (
              "We miss you!"
            ) : (
              "We missed you!"
            )}
          </Tag>
        )}
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={["10px", "10px", "20px", "20px"]}
      >
        <CarousalMain />
        <WeeklyQuiz />
        <ReferralComponent />
        <CoinsComponent />
        {/* <Schedule /> */}
        <Pricing />
        <MoreActions />
        <Footer />
      </Box>
    </Box>
  );
};
