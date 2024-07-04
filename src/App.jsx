import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css";
import { Main } from "./Pages/Main";
import { NoUserFound } from "./Pages/NoUserFound";
import { SessionNotFound } from "./Pages/SessionNotFound";
import { Error } from "./Pages/Error";
import { Dashboard } from "./Pages/Dashboard";
import { PrivateRoute } from "./Components/PrivateRoute";
import { Referrals } from "./Pages/Referrals";
import { Store } from "./Pages/Store";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Coins } from "./Pages/Coins";
import { Address } from "./Pages/Address";
import { Orders } from "./Pages/Orders";
import { Missed } from "./Pages/Missed";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/referrals"
          element={
            <PrivateRoute>
              <Referrals />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/store"
          element={
            <PrivateRoute>
              <Store />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/coins"
          element={
            <PrivateRoute>
              <Coins />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/missed"
          element={
            <PrivateRoute>
              <Missed />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/nosession" element={<SessionNotFound />}></Route>
        <Route path="/nouser" element={<NoUserFound />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route
          path="*"
          element={
            <Box
              height={["80vh", "80vh", "90vh", "95vh"]}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Heading>OOPS!</Heading>
              <Text fontSize={["15px", "15px", "18px", "18px"]}>
                Page not Found...
              </Text>
            </Box>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
