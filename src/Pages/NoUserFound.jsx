import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setMode } from "../Redux/action";

export const NoUserFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode(""));
  }, []);
  return (
    <div
      className="email-not-found"
      style={{
        textAlign: "center",
      }}
    >
      <p
        style={{
          marginBottom: "15px",
        }}
      >
        This Email is not registered with us. <br />
        Please use a registered Email Address
      </p>
      <div>
        <Link id="submit-btn" to={"/"}>
          Try Again
        </Link>
        <Link
          to={"/"}
          id="submit-btn"
          onClick={() => {
            window.open(
              `https://wa.me/919717094422?text=${encodeURIComponent(
                "Please send me my registered email"
              )}`,
              "_blank"
            );
          }}
        >
          Get Your Registered Email
        </Link>
      </div>
    </div>
  );
};
