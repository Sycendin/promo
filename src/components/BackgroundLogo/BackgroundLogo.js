import React, { Fragment } from "react";
import "./BackgroundLogo.css";
const BackgroundLogo = () => {
  return (
    <Fragment>
      {" "}
      <img
        className="logo-animation"
        alt="logo"
        height={440}
        width={480}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
        }
        style={{ width: "20%", height: "auto", marginRight: "70%" }}
      ></img>
    </Fragment>
  );
};
export default BackgroundLogo;
