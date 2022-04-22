import React, { Fragment } from "react";
import "./BackgroundLogo.css";
const BackgroundLogo = ({ resize, cName }) => {
  return (
    <Fragment>
      {" "}
      <img
        className={cName}
        alt="logo"
        height={440}
        width={480}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
        }
        onLoad={() => resize}
      ></img>
    </Fragment>
  );
};
export default BackgroundLogo;
