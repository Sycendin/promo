import React, { Fragment, useState, useEffect, useRef } from "react";
import "./BackgroundText.css";
const BackgroundText = ({ divH }) => {
  const controls = useRef();
  const [fixedPosition, setFixedPostion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < divH - 500) {
        setFixedPostion(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divH]);
  return (
    <Fragment>
      <div
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
          ref={controls}
          className="text-shadow"
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            fontSize: 40,
            fontWeight: "bold",
            color: "rgb(200, 229, 250)",
            marginTop: fixedPosition + 400,
          }}
        >
          <span style={{}}>
            <span style={{}}>Opening Day:</span>
            <span style={{ color: "rgb(70, 167, 242)" }}> April 8th</span>
          </span>
          <span>Experience It Live</span>
        </span>
      </div>
    </Fragment>
  );
};
export default BackgroundText;
