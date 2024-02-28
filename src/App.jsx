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
        <Route path="/nosession" element={<SessionNotFound />}></Route>
        <Route path="/nouser" element={<NoUserFound />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center" }}>
              <h1>OOPS!</h1>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                Page not Found..
              </p>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
