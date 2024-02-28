import { useEffect, useState } from "react";
import "../App.css";
import "animate.css";
import { Header } from "../Components/Header";
import { Navigate } from "react-router-dom";
import { Login } from "../Components/Login";
import { Loading } from "../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/action";

export const Main = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(window.location.search);
  const [email, setEmail] = useState(query.get("email"));
  const { loading, error, mode } = useSelector((state) => state);

  useEffect(() => {
    if (email) {
      dispatch(fetchUser(email));
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error || mode === "error") {
    return <Navigate to={"/error"} />;
  }

  if (mode === "nouser") {
    return <Navigate to={"/nouser"} />;
  }

  if (mode === "nosession") {
    return <Navigate to={"/nosession"} />;
  }

  if (mode === "user") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
};
