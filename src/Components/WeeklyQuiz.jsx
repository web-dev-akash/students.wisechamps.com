import { Box, Button, Image, Tag, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const WeeklyQuiz = () => {
  const weeklyQuizzes = useSelector((state) => state.user.weeklyQuizzes);
  const email = useSelector((state) => state.user.email);
  const [index, setIndex] = useState(0);
  const [loadingStates, setLoadingStates] = useState({});
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const authToken = process.env.REACT_APP_AUTH_TOKEN;
  const [isAtStart, setIsAtStart] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const timersRef = useRef([]);

  const getSessionStatus = (sessionDateTime) => {
    const now = new Date();
    const sessionDate = new Date(sessionDateTime);
    const currentDate = now.toDateString();
    const sessionDateStr = sessionDate.toDateString();
    const currentTime = now.getTime();
    const sessionTime = sessionDate.getTime();
    if (sessionDateStr < currentDate) {
      return false;
    }
    if (sessionDateStr > currentDate) {
      return true;
    }
    const fiveMinutesBefore = sessionTime - 5 * 60 * 1000;
    const tenMinutesAfter = sessionTime + 70 * 60 * 1000;
    if (currentTime >= fiveMinutesBefore && currentTime <= tenMinutesAfter) {
      return "active";
    }
    if (currentTime > tenMinutesAfter) {
      console.log("Entered Ended");
      return "ended";
    }

    return "inactive";
  };

  function formatDateTime(Session_Date_Time) {
    const dateObj = new Date(Session_Date_Time);
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
      hours -= 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedDateTime = `${day} ${month}, ${hours}:${formattedMinutes} ${period}`;

    return formattedDateTime;
  }

  const getColorScheme = (Session_Date_Time) => {
    const sessionDate = new Date(Session_Date_Time);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sessionDateOnly = new Date(
      sessionDate.getFullYear(),
      sessionDate.getMonth(),
      sessionDate.getDate()
    );
    const todayDateOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    if (sessionDateOnly < todayDateOnly) {
      return "linkedin";
    }

    if (sessionDateOnly > todayDateOnly) {
      return "purple";
    }

    return "whatsapp";
  };

  const loginLink = async (surveyId, id) => {
    const alreadyLoggedIn = sessionStorage.getItem("wise_lms_logged_in");
    if (alreadyLoggedIn) {
      window.open(
        `https://wisechamps.app/mod/lti/view.php?id=${surveyId}`,
        "_blank"
      );
      return;
    }
    setLoadingStates((prevLoadingStates) => ({
      ...prevLoadingStates,
      [id]: true,
    }));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
    const url = `https://backend.wisechamps.com/quiz/loginLink`;
    const res = await axios.post(
      url,
      { email: email, surveyId: surveyId },
      config
    );
    const finalLink = res.data.finalLink;
    console.log("Final Link :", finalLink);
    sessionStorage.setItem("wise_lms_logged_in", true);
    window.open(finalLink, "_blank");
    setLoadingStates((prevLoadingStates) => ({
      ...prevLoadingStates,
      [id]: false,
    }));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      const container = containerRef.current;
      const currentItem = itemRefs.current[prevIndex]?.current;
      const itemWidth = currentItem ? currentItem.clientWidth : 0;
      const containerWidth = container ? container.clientWidth : 0;
      const maxScrollLeft = container
        ? container.scrollWidth - containerWidth
        : 0;
      const newScrollLeft = (prevIndex + 1) * itemWidth;
      if (newScrollLeft > maxScrollLeft) {
        setIsAtEnd(true);
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const today = new Date();
    const initialIndex = weeklyQuizzes.findIndex((quiz) => {
      const quizDate = new Date(quiz.Session_Date_Time);
      return quizDate.toDateString() === today.toDateString();
    });
    const screenWidth = window.innerWidth;
    setIndex(
      initialIndex === -1
        ? 0
        : screenWidth > 1621
        ? initialIndex - 2
        : screenWidth > 768
        ? initialIndex - 1
        : initialIndex
    );
  }, []);

  useEffect(() => {
    if (itemRefs.current.length === 0 || !containerRef.current) return;
    const container = containerRef.current;
    const currentItem = itemRefs.current[index]?.current;
    if (currentItem) {
      container.scrollTo({
        left: index * currentItem.clientWidth,
        behavior: "smooth",
      });

      setIsAtStart(index === 0);
      setIsAtEnd(index === itemRefs.current.length - 1);
    }
  }, [index]);

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

    const fiveMinutesBefore = new Date(sessionTime - 5 * 60 * 1000);
    const tenMinutesAfter = new Date(sessionTime + 70 * 60 * 1000);

    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];

    if (now >= fiveMinutesBefore && now <= tenMinutesAfter) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }

    if (now < fiveMinutesBefore) {
      timersRef.current.push(
        setTimeout(() => setActiveBtn(true), fiveMinutesBefore - now)
      );
    }

    if (now < tenMinutesAfter) {
      timersRef.current.push(
        setTimeout(() => setActiveBtn(false), tenMinutesAfter - now)
      );
    }

    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, [activeBtn]);

  return (
    <Box
      background="white"
      border={"1px solid #4E46E4"}
      padding={"1rem"}
      borderRadius={"10px"}
      gridColumn={["unset", "unset", "1 / span 2", "1 / span 2"]}
      overflow={"hidden"}
      position={"relative"}
    >
      <Text fontWeight={700} fontSize={["15px", "15px", "18px", "18px"]}>
        Quizzes
      </Text>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={["10px", "10px", "15px", "15px"]}
        flexWrap={"nowrap"}
        overflowX={"auto"}
        scrollSnapType={"x mandatory"}
        width={"100%"}
        maxWidth={"100%"}
        mt={"10px"}
        ref={containerRef}
        id="quizScroller"
      >
        {weeklyQuizzes.map(
          (
            {
              Session_Video_Link,
              Session_Image_Link,
              Session_Name,
              id,
              LMS_Survey_ID,
              Subject,
              Session_Date_Time,
              Session_Video_Link_2,
            },
            idx
          ) => {
            if (!itemRefs.current[idx]) {
              itemRefs.current[idx] = React.createRef();
            }
            return (
              <Box
                key={id}
                bg={"#f7f6fa"}
                padding={"15px"}
                borderRadius={"20px"}
                alignSelf={"stretch"}
                ref={itemRefs.current[idx]}
                scrollSnapAlign={"center"}
                minWidth={["100%", "300px", "350px", "350px"]}
                position={"relative"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Tag
                    // position={"absolute"}
                    // left={"7px"}
                    // top={"7px"}
                    borderRadius={"50px"}
                    padding={"5px 10px"}
                    size={["sm", "sm", "md", "md"]}
                    colorScheme={getColorScheme(Session_Date_Time)}
                    fontSize={["10px", "10px", "13px", "13px"]}
                    fontWeight={500}
                  >
                    {Subject}
                  </Tag>
                  <Tag
                    // position={"absolute"}
                    // right={"7px"}
                    // top={"7px"}
                    borderRadius={"50px"}
                    padding={"5px 10px"}
                    size={["sm", "sm", "md", "md"]}
                    colorScheme={getColorScheme(Session_Date_Time)}
                    fontSize={["10px", "10px", "13px", "13px"]}
                    fontWeight={500}
                  >
                    {formatDateTime(Session_Date_Time)}
                  </Tag>
                </Box>

                <Image
                  src={Session_Image_Link}
                  alt=""
                  width={"100%"}
                  maxHeight={"150px"}
                  borderRadius={"10px"}
                  objectFit={"cover"}
                  m={"10px 0"}
                />
                {/* <Text
                  mt={Session_Image_Link ? "8px" : "20px"}
                  mb={"8px"}
                  fontSize={["14px", "14px", "15px", "16px"]}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  {Session_Name}
                </Text> */}
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  {Session_Video_Link && (
                    <Button
                      id="submit-btn"
                      fontSize={["12px", "13px", "14px", "14px"]}
                      mb={"8px"}
                      onClick={() => window.open(Session_Video_Link, "_blank")}
                    >
                      {Session_Video_Link_2
                        ? "Preview Video 1"
                        : "Preview Video"}
                    </Button>
                  )}
                  {Session_Video_Link_2 && (
                    <Button
                      id="submit-btn"
                      fontSize={["12px", "13px", "14px", "14px"]}
                      mb={"8px"}
                      onClick={() =>
                        window.open(Session_Video_Link_2, "_blank")
                      }
                    >
                      Preview Video 2
                    </Button>
                  )}
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  {(getSessionStatus(Session_Date_Time) === "active" ||
                    getSessionStatus(Session_Date_Time) === "inactive" ||
                    getSessionStatus(Session_Date_Time) === "ended") && (
                    <Button
                      id={
                        getSessionStatus(Session_Date_Time) === "inactive" ||
                        getSessionStatus(Session_Date_Time) === "ended"
                          ? "submit-btn-active"
                          : "submit-btn"
                      }
                      fontSize={["12px", "13px", "14px", "14px"]}
                      isLoading={
                        getSessionStatus(Session_Date_Time) === "inactive" ||
                        getSessionStatus(Session_Date_Time) === "ended"
                          ? true
                          : false
                      }
                      spinnerPlacement="none"
                      loadingText={
                        getSessionStatus(Session_Date_Time) === "ended"
                          ? "Today's Quiz Ended"
                          : "Quiz not started yet"
                      }
                      onClick={() =>
                        window.open(
                          `https://zoom.wisechamps.com?email=${email}`,
                          "_blank"
                        )
                      }
                    >
                      Join Now
                    </Button>
                  )}
                  {(getColorScheme(Session_Date_Time) === "linkedin" ||
                    getSessionStatus(Session_Date_Time) === "ended") && (
                    <Button
                      id="submit-btn"
                      fontSize={["12px", "13px", "14px", "14px"]}
                      onClick={() => loginLink(LMS_Survey_ID, id)}
                      isLoading={loadingStates[id]}
                      loadingText={""}
                    >
                      Missed Quiz
                    </Button>
                  )}
                </Box>
              </Box>
            );
          }
        )}
      </Box>
      <Button
        onClick={handlePrev}
        m={"10px"}
        isLoading={isAtStart}
        spinnerPlacement="none"
        loadingText={<LuChevronLeftCircle />}
        bg={"none"}
        fontSize={"28px"}
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        left={"-10px"}
        border={"none"}
        outline={"none"}
        padding={"0"}
        cursor={"pointer"}
        as={"p"}
      >
        <LuChevronLeftCircle />
      </Button>
      <Button
        isLoading={isAtEnd}
        spinnerPlacement="none"
        loadingText={<LuChevronRightCircle />}
        onClick={handleNext}
        m={"10px"}
        bg={"none"}
        fontSize={"28px"}
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        right={"-10px"}
        border={"none"}
        outline={"none"}
        padding={"0"}
        cursor={"pointer"}
        as={"p"}
      >
        <LuChevronRightCircle />
      </Button>
    </Box>
  );
};
