import React from "react";
import "./index.css";

const Test = () => {
  return (
    <svg
      width="200px"
      height="200px"
      viewBox="0 0 200 200"
      style={{ border: "1px solid" }}
    >
      <polyline
        strokeDasharray="5 5 5 5 5 20"
        points="10 20, 10 150, 150 150"
        fill="none"
        strokeWidth="5"
        stroke="red"
      />
    </svg>
  );
};

export default Test;
