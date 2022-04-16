import React, { Fragment } from "react";
import "./BackgroundText.css";

const BackgroundText = () => {
  return (
    <Fragment>
      <span
        className="text-shadow span-animate"
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          fontWeight: "bold",
          color: "rgb(200, 229, 250)",
          marginTop: "25%",
        }}
      >
        <span style={{}}>
          <span style={{}}>Opening Day:</span>
          <span style={{ color: "rgb(70, 167, 242)" }}> April 8th</span>
        </span>
        <span>Experience It Live</span>
      </span>
    </Fragment>
  );
};
export default BackgroundText;
