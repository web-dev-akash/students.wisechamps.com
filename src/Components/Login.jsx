import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, getProducts } from "../Redux/action";

export const Login = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(window.location.search);
  const [email, setEmail] = useState(query.get("email"));

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleClick = async () => {
    dispatch(fetchUser(email));
    dispatch(getProducts());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="main animate__animated animate__fadeInRight">
      <h3>Email</h3>
      <div className="form">
        <input
          className="input"
          type="email"
          placeholder="Enter Email"
          inputMode="email"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <p>* Please use the registered Email.</p>
        <button id="submit-btn" onClick={() => handleClick(email)}>
          Submit
        </button>
      </div>
    </div>
  );
};
