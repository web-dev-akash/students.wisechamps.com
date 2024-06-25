import { Box, Heading, Image, Tag, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header";
import hi from "../assets/hi.gif";
import { ReferralComponent } from "../Components/ReferralComponent";
import { UserSystemStatics } from "../Components/UserSystemStatics";
import { Schedule } from "../Components/Schedule";
import { MoreActions } from "../Components/MoreActions";
import { getOrders, getProducts } from "../Redux/action";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user.id));
    localStorage.setItem("wisechamps_current_path", window.location.pathname);
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, []);
  return (
    <Box padding={"2.3rem 11px 1rem 11px"} className="dashboard">
      <Header />
      <UserSystemStatics />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"10px 0"}
      >
        <Box display={"flex"} gap={"5px"}>
          <Heading
            fontSize={["20px", "20px", "25px", "25px", "25px"]}
            fontWeight={400}
            textTransform={"capitalize"}
          >
            Hi, {user.studentName}
          </Heading>
          <Image
            position={"relative"}
            bottom={["4px", "4px", "0", "0"]}
            src={hi}
            alt="👋"
            width={"30px"}
          />
        </Box>
        {user.category && user.category !== "" && (
          <Tag
            fontSize={["10px", "10px", "15px", "15px"]}
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
