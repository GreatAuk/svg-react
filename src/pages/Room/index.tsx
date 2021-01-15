import React from "react";
import coordsData from "./data.ts";
import Room from "./Room";

const RoomPage = () => {
  return (
    <svg
      width="500px"
      height="500px;"
      viewBox="-1000 -1000 14000 11000"
      style={{ border: "1px solid red", backgroundColor: "blue" }}
    >
      <Room coords={coordsData} />
    </svg>
  );
};

export default RoomPage;
