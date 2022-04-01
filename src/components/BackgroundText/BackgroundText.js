import React, { Fragment } from "react";
import "./BackgroundText.css";
const backgroundText = () => {
  return (
    <Fragment>
      <p
        style={{
          position: "absolute",
          zIndex: 30,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <span
          className="text-shadow"
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            fontSize: 40,
            fontWeight: "bold",
            color: "rgb(200, 229, 250)",
            // textShadow: "0px 0px 8px rgb(0, 0, 255)",
            // textShadow: "0px 0px 10px rgb(0, 0, 0)",

            marginTop: "50%",
          }}
        >
          <span style={{}}>
            <span style={{}}>Opening Day:</span>
            <span style={{ color: "rgb(70, 167, 242)" }}> April 8th</span>
          </span>
          <span>Experience It Live</span>
        </span>
      </p>
    </Fragment>
  );
};
export default backgroundText;
