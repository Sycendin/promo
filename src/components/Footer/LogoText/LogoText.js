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
            "https://cdn.discordapp.com/attachments/958975018816131132/960774410145509376/bluejaystext.png"
          }
        ></img>
      </div>
    </Fragment>
  );
};
export default LogoText;
