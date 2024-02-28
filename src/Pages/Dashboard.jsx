import { Box, Heading, Image, Tag } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header";
import hi from "../assets/hi.gif";
import { ReferralComponent } from "../Components/ReferralComponent";
import { UserSystemStatics } from "../Components/UserSystemStatics";
import { Schedule } from "../Components/Schedule";
import { MoreActions } from "../Components/MoreActions";
import { getStoreURL } from "../Redux/action";
import { CustomAlert } from "../Components/CustomAlert";
export const Dashboard = () => {
  const { user, alert } = useSelector((state) => state);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(alert);
    const showAlertTimeout = setTimeout(() => {
      setShowAlert(true);
    }, 2000);
    const hideAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 10000);
    dispatch(getStoreURL(user.email));
    return () => {
      clearTimeout(showAlertTimeout);
      clearTimeout(hideAlertTimeout);
    };
  }, []);

  return (
    <Box padding={"2rem 15px 1rem 15px"}>
      <Header />
      {showAlert && <CustomAlert />}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={"20px"}
        mb={[0, 0, 5, 5]}
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
            bottom={["5px", "5px", "0", "0"]}
            src={hi}
            alt="👋"
            width={"30px"}
          />
        </Box>
        <Box>
          {user.category && user.category !== "" && (
            <Tag
              size={["sm", "sm", "md", "md"]}
              colorScheme={
                user.category === "Active" || user.category === "Regular"
                  ? "whatsapp"
                  : user.category === "Inactive" ||
                    user.category === "AtRisk" ||
                    user.category === "Dropout"
                  ? "red"
                  : "linkedin"
              }
            >
              {user.category}
            </Tag>
          )}
        </Box>
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
        mt={4}
      >
        <ReferralComponent />
        <UserSystemStatics />
        <Schedule />
        <MoreActions />
      </Box>
    </Box>
  );
};
