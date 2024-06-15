import React from "react";
import { RaceBy } from "@uiball/loaders";
export const Loading = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          width: "90%",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Loading Please Wait...
      </p>
      <RaceBy
        size={300}
        lineWeight={20}
        speed={1.4}
        color="rgba(129, 140, 248)"
      />
    </div>
  );
};
