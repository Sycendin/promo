import React, { Fragment, useEffect, useRef, useState } from "react";
// import Sticky from "./Sticky";
import "./PSticky.css";
const PSticky = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);
  return (
    <Fragment>
      {/* <div class="extra"></div> */}

      <div style={{}} className="wrapper">
        <div ref={ref} style={{ zIndex: 2 }} id="sticky">
          <img
            alt="logo"
            height={440}
            width={480}
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
            }
            style={{ width: "20%", height: "auto", marginRight: "70%" }}
          ></img>
          <span
            className="text-shadow"
            style={{
              display: "flex",
              alignContent: "center",
              flexDirection: "column",
              fontSize: 40,
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {height ? (
            <img
              width={1775}
              height={2220}
              alt={"background"}
              style={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                position: "relative",

                maxWidth: "70%",
                height: "auto",
                marginTop: -ref.current.offsetHeight,
                top: 0,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
              src={
                "https://cdn.discordapp.com/attachments/958975018816131132/959290872514621450/vlad.webp"
              }
            ></img>
          ) : null}
        </div>
      </div>
      <br />
      <div style={{ zIndex: 4 }} className="extra"></div>
    </Fragment>
  );
};
export default PSticky;
