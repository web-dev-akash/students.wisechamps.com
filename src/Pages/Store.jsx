import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Header } from "../Components/Header";
import { GiTwoCoins } from "react-icons/gi";
import preview from "../assets/preview.jpg";
import { getError, getLoading, getOrders } from "../Redux/action";
import { Loading } from "../Components/Loading";
import axios from "axios";
import order_placed from "../assets/order_placed.gif";

export const Store = () => {
  const dispatch = useDispatch();
  const [tempMode, setTempMode] = useState("");
  const products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const { coins, id } = useSelector((state) => state.user);

  const handleProductPurchase = async (body) => {
    try {
      dispatch(getLoading());
      const authToken = process.env.REACT_APP_AUTH_TOKEN;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };
      const url = `https://backend.wisechamps.com/student/store/placeOrder`;
      const res = await axios.post(url, body, config);
      if (res.data.status === 201) {
        setTempMode("thankyou");
      } else {
        dispatch(getError());
      }
    } catch (error) {
      dispatch(getError());
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(getOrders(id));
    localStorage.setItem("wisechamps_current_path", window.location.pathname);
    if (tempMode === "thankyou") {
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  }, [tempMode]);

  if (tempMode === "thankyou") {
    return (
      <>
        <Header hidetags={true} />
        <Box
          height={["80vh", "80vh", "90vh", "100vh"]}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={2}
          textAlign={"center"}
        >
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              width={"55px"}
              height={"45px"}
              objectFit={"cover"}
              src={order_placed}
              alt="✅"
            />
            <Text
              fontSize={["22px", "22px", "25px", "30px"]}
              fontWeight={600}
              mr={"35px"}
            >
              Order Placed{" "}
            </Text>
          </Box>
          <Text
            maxWidth={"400px"}
            width={"90%"}
            margin={"0 auto"}
            fontSize={["13px", "13px", "14px", "15px"]}
          >
            Your order has been placed successfully. You can view the details of
            your order in the Orders Page.
          </Text>
          <Button
            id="submit-btn"
            style={{ width: "160px" }}
            fontSize={["13px", "13px", "14px", "15px"]}
            mt={"5px"}
            onClick={() => window.location.reload()}
          >
            Go back to store
          </Button>
        </Box>
      </>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Navigate to={"/error"} />;
  }

  if (products?.length === 0) {
    return (
      <Box
        height={["95vh", "95vh", "95vh", "98vh"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text>
          <Text mb={4}>The Reward Store will be available soon..</Text>
          <Link style={{ fontSize: "13px" }} to={"/dashboard"} id="submit-btn">
            Try Again
          </Link>
        </Text>
      </Box>
    );
  }

  return (
    <Box padding={"1rem 11px"}>
      <Header hidetags={true} showOrders={true} />
      <Box mt={"40px"}>
        <Box>
          <Text fontSize={["13px", "13px", "15px", "15px"]}>
            Available Coin Balance
          </Text>
          <Text
            fontWeight={700}
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
            fontSize={["30px", "30px", "35px", "40px"]}
            m={"0px 0 8px 0"}
          >
            {coins}{" "}
            <GiTwoCoins
              color={"gold"}
              style={{
                filter: "drop-shadow(0 0 0.8px rgba(0, 0, 0, 0.8))",
              }}
            />
          </Text>
        </Box>
      </Box>
      <SimpleGrid
        mt={"15px"}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
      >
        {products.map(
          ({
            Description,
            Product_Name,
            Product_Id,
            Product_Image_URL,
            Unit_Price,
          }) => (
            <Card
              key={Product_Id}
              boxShadow={
                "rgb(204, 219, 232) 0px 0px 6px 1px, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px"
              }
            >
              <CardBody>
                <Box
                  borderRadius={"lg"}
                  height={"300px"}
                  overflow={"hidden"}
                  border={"1px solid #cfcfcf80"}
                >
                  <Image
                    src={Product_Image_URL || preview}
                    alt="Product Image"
                    borderRadius="lg"
                    height={"100%"}
                    width={"100%"}
                    objectFit={"cover"}
                  />
                </Box>
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    <Text>{Product_Name}</Text>
                  </Heading>
                  <Text size="sm">{Description}</Text>
                  <Text
                    color={"#4e46e4"}
                    fontSize="30px"
                    fontWeight={700}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    {Unit_Price}{" "}
                    <GiTwoCoins
                      color={"gold"}
                      style={{
                        filter: "drop-shadow(0 0 0.8px rgba(0, 0, 0, 0.8))",
                      }}
                    />
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  id={coins < Unit_Price ? "submit-btn-active" : "submit-btn"}
                  isLoading={coins < Unit_Price ? true : false}
                  loadingText="Insufficient Coins"
                  spinnerPlacement="none"
                  fontSize={["13px", "13px", "14px", "15px"]}
                  onClick={() =>
                    handleProductPurchase({
                      contactId: id,
                      productId: Product_Id,
                    })
                  }
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </SimpleGrid>
    </Box>
  );
};
