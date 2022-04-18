import React, { Fragment } from "react";
import "./LogoText.css";
const LogoText = () => {
  return (
    <Fragment>
      <div className="logo-div">
        <img
          className="logo-img"
          width={256}
          height={256}
          alt="bj-logo-with-text"
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/965463161450950716/bluejaystextsmall.png"
          }
        ></img>
      </div>
    </Fragment>
  );
};
export default LogoText;
