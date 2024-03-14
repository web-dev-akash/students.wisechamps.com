import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getError, getLoading, setLoading } from "../Redux/action";
import { Header } from "../Components/Header";
import { Loading } from "../Components/Loading";
import { Navigate } from "react-router-dom";
import * as changeCase from "change-case";

export const Address = () => {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [tempMode, setTempMode] = useState("");
  const dispatch = useDispatch();
  const [address, setAddess] = useState({
    pincode: "",
    flat: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
  });
  const [pincode, setPincode] = useState("");
  const [invalidPincode, setInvalidPincode] = useState(false);

  const handleAddressFormChange = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value.trim();
    if (name === "pincode" && value.length === 6) {
      const url = `${process.env.REACT_APP_PINCODE_API}=${value}`;
      setPincode(value);
      axios.get(url).then((res) => {
        if (res.data.total !== 0) {
          setInvalidPincode(false);
          const state = changeCase.capitalCase(res.data.records[0]._statename);
          const city = changeCase.capitalCase(res.data.records[0].districtname);
          setAddess({ ...address, city: city, state: state });
        } else {
          setInvalidPincode(true);
        }
      });
    } else if (name === "pincode" && value.length < 6) {
      setInvalidPincode(true);
    }
    setAddess({ ...address, [name]: value });
  };

  const handleAddressSubmit = async (email, addressData, pincode) => {
    try {
      if (pincode.length !== 6) {
        alert("Please Enter a valid Pincode");
        return;
      }
      if (
        !addressData.flat ||
        !addressData.street ||
        !addressData.city ||
        !addressData.state
      ) {
        alert("Please Fill all the required details");
        return;
      }
      if (addressData.street.length <= 3) {
        alert("Please enter the valid Street, Area or City");
        return;
      }
      dispatch(getLoading());
      const address = `${addressData.flat}, ${addressData.street}, ${
        addressData.landmark ? addressData.landmark + ", " : ""
      }${addressData.city}, ${addressData.state}`;
      const body = {
        email: email,
        address: address,
        pincode: Number(pincode),
      };
      const url = `https://backend.wisechamps.com/quiz/address`;
      const res = await axios.post(url, body);
      if (res.data?.data[0]?.status === "success") {
        dispatch(setLoading());
        setTempMode("thankyou");
      } else {
        dispatch(getError());
      }
    } catch (error) {
      dispatch(getError());
    }
  };

  useEffect(() => {}, [address.city, address.state, invalidPincode]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Navigate to={"/error"} />;
  }

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
          <Text fontSize={["18px", "18px", "25px", "30px"]} fontWeight={600}>
            Thank You
          </Text>
          <Text
            maxWidth={"400px"}
            width={"90%"}
            margin={"0 auto"}
            fontSize={["13px", "13px", "14px", "15px"]}
          >
            Your address has been successfully updated. Thank you for providing
            your updated information.
          </Text>
        </Box>
      </>
    );
  }

  return (
    <Box border={"1px solid transparent"}>
      <Header hidetags={true} />
      <Box
        className="animate__animated animate__fadeInRight address"
        border={"1px solid #ccc"}
        p={"1rem"}
        borderRadius={"10px"}
        margin={"3rem auto 1rem auto"}
        width={["95%", "95%", "600px", "600px"]}
      >
        <FormControl>
          <Text
            textAlign={"left"}
            fontWeight={"700"}
            fontSize={["25px", "25px", "30px", "30px"]}
            color={"#6666ff"}
            margin={"10px 0 30px 0"}
          >
            During the quizzes we announce winners regularly who are awarded
            gifts <br />
            <Spacer height={5} />
            <Text fontSize={"15px"} color={"#000"}>
              To receive gifts from Wisechamps please fill in your complete
              mailing address.
            </Text>
          </Text>
          <FormLabel fontSize={["13px", "13px", "15px", "15px"]} mt={5} mb={1}>
            Pincode
          </FormLabel>
          <Input
            isInvalid={invalidPincode}
            fontSize={["12px", "12px", "15px", "15px"]}
            type="number"
            name="pincode"
            placeholder="Eg. 123456"
            isRequired
            onChange={handleAddressFormChange}
          />
          <FormLabel fontSize={["13px", "13px", "15px", "15px"]} mt={5} mb={1}>
            Flat, House no., Building, Company, Apartment
          </FormLabel>
          <Input
            fontSize={["12px", "12px", "15px", "15px"]}
            name="flat"
            placeholder="Eg. House no. 10"
            isRequired
            onChange={handleAddressFormChange}
          />
          <FormLabel fontSize={["13px", "13px", "15px", "15px"]} mt={5} mb={1}>
            Area, Street, Sector, Village, City
          </FormLabel>
          <Input
            fontSize={["12px", "12px", "15px", "15px"]}
            name="street"
            placeholder="Eg. ABC Street"
            isRequired
            onChange={handleAddressFormChange}
          />
          <FormLabel fontSize={["13px", "13px", "15px", "15px"]} mt={5} mb={1}>
            Landmark
          </FormLabel>
          <Input
            fontSize={["12px", "12px", "15px", "15px"]}
            name="landmark"
            placeholder="Eg. Near SBI bank"
            onChange={handleAddressFormChange}
          />
          <FormLabel fontSize={["13px", "13px", "15px", "15px"]} mt={5} mb={1}>
            District
          </FormLabel>
          <Input
            id={"city"}
            fontSize={["12px", "12px", "15px", "15px"]}
            value={address.city}
            name="city"
            placeholder="Eg. New Delhi"
            isRequired
            onChange={handleAddressFormChange}
          />
          <FormLabel fontSize={["13px", "13px", "15px", "15px"]} mt={5} mb={1}>
            State
          </FormLabel>
          <Input
            id={"city"}
            fontSize={["12px", "12px", "15px", "15px"]}
            value={address.state}
            name="state"
            placeholder="Eg. Delhi"
            isRequired
            onChange={handleAddressFormChange}
          />
          <Spacer height={8} />

          <Button
            fontSize={["13px", "13px", "15px", "15px"]}
            width={"100%"}
            background={"rgba(129, 140, 248)"}
            color={"white"}
            border={"2px solid transparent"}
            cursor={"pointer"}
            onClick={() => handleAddressSubmit(user.email, address, pincode)}
            transition={"0.5s ease"}
            _hover={{
              outline: "none",
              background: "white",
              color: "black",
              border: "2px solid rgba(129, 140, 248)",
              boxShadow: "0 0 0 5px rgb(129 140 248 / 30%)",
            }}
            _focus={{
              outline: "none",
              background: "white",
              color: "black",
              border: "2px solid rgba(129, 140, 248)",
              boxShadow: "0 0 0 5px rgb(129 140 248 / 30%)",
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
