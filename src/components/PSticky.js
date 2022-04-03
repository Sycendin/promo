import React, { Fragment, useEffect, useRef, useState } from "react";
// import Sticky from "./Sticky";
import "./PSticky.css";
const PSticky = () => {
  return (
    <Fragment>
      {/* <div class="extra"></div> */}

      <div style={{}} className="wrapper">
        <span
          id="sticky"
          className="text-shadow"
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            fontSize: 40,
            fontWeight: "bold",
            color: "rgb(200, 229, 250)",
          }}
        >
          <span style={{}}>
            <span style={{}}>Opening Day:</span>
            <span style={{ color: "rgb(70, 167, 242)" }}> April 8th</span>
          </span>
          <span>Experience It Live</span>
        </span>
        <img
          width={1775}
          height={2220}
          alt={"background"}
          style={{
            maxWidth: "70%",
            height: "auto",
            marginTop: -109,
          }}
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/959290872514621450/vlad.webp"
          }
        ></img>
      </div>
      <br />
      <div class="extra"></div>
    </Fragment>
  );
};
export default PSticky;
