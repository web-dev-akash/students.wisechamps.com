import { Box, Button, Image, Tag, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

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
  const intervalRef = useRef(null);
  const authToken = process.env.REACT_APP_AUTH_TOKEN;

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

  useEffect(() => {
    const autoScroll = () => {
      if (itemRefs.current.length === 0 || !containerRef.current) return;

      const container = containerRef.current;
      const currentItem = itemRefs.current[index]?.current;

      if (currentItem) {
        container.scrollTo({
          left: index * currentItem.clientWidth,
          behavior: "smooth",
        });

        if (
          Math.round(container.scrollLeft + container.clientWidth) + 2 >=
          container.scrollWidth
        ) {
          setIndex(0);
        } else {
          setIndex((index + 1) % itemRefs.current.length);
        }
      }
    };

    const handleUserTouchStart = () => {
      clearInterval(intervalRef.current);
    };

    const handleUserTouchEnd = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(autoScroll, 5000);
    };
    intervalRef.current = setInterval(autoScroll, 2000);
    const container = containerRef.current;
    container.addEventListener("touchstart", handleUserTouchStart);
    container.addEventListener("touchend", handleUserTouchEnd);
    container.addEventListener("touchmove", handleUserTouchStart);
    container.addEventListener("touchcancel", handleUserTouchEnd);
    container.addEventListener("wheel", handleUserTouchEnd);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [index]);

  return (
    <Box
      background="white"
      border={"1px solid #4E46E4"}
      padding={"1rem"}
      borderRadius={"10px"}
      gridColumn={["unset", "unset", "1 / span 2", "1 / span 2"]}
      overflow={"hidden"}
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
        m={"10px 0"}
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
                <Tag
                  position={"absolute"}
                  right={"7px"}
                  top={"7px"}
                  borderRadius={"50px"}
                  padding={"5px 10px"}
                  size={["sm", "sm", "md", "md"]}
                  colorScheme={getColorScheme(Session_Date_Time)}
                  fontSize={["10px", "10px", "13px", "13px"]}
                  fontWeight={500}
                >
                  {formatDateTime(Session_Date_Time)}
                </Tag>
                <Tag
                  position={"absolute"}
                  left={"7px"}
                  top={"7px"}
                  borderRadius={"50px"}
                  padding={"5px 10px"}
                  size={["sm", "sm", "md", "md"]}
                  colorScheme={getColorScheme(Session_Date_Time)}
                  fontSize={["10px", "10px", "13px", "13px"]}
                  fontWeight={500}
                >
                  {Subject}
                </Tag>
                <Image
                  src={Session_Image_Link}
                  alt=""
                  width={"100%"}
                  maxHeight={"150px"}
                  borderRadius={"10px"}
                  objectFit={"cover"}
                />
                <Text
                  mt={Session_Image_Link ? "8px" : "20px"}
                  mb={"8px"}
                  fontSize={["12px", "12px", "14px", "14px"]}
                  fontWeight={500}
                >
                  {Session_Name}
                </Text>

                <Button
                  id="submit-btn"
                  fontSize={["12px", "13px", "14px", "14px"]}
                  mb={"8px"}
                  onClick={() => window.open(Session_Video_Link, "_blank")}
                >
                  Preview Video
                </Button>
                {getColorScheme(Session_Date_Time) === "whatsapp" && (
                  <Button
                    id="submit-btn"
                    fontSize={["12px", "13px", "14px", "14px"]}
                    mb={"8px"}
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
                {getColorScheme(Session_Date_Time) === "linkedin" && (
                  <Button
                    id="submit-btn"
                    fontSize={["12px", "13px", "14px", "14px"]}
                    onClick={() => loginLink(LMS_Survey_ID, id)}
                    isLoading={loadingStates[id]}
                    loadingText={""}
                  >
                    Quiz Questions
                  </Button>
                )}
              </Box>
            );
          }
        )}
      </Box>
    </Box>
  );
};
