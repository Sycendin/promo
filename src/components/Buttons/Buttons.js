import React, { Fragment } from "react";
import "./Buttons.css";
const Buttons = () => {
  return (
    <Fragment>
      <div className="button-div">
        <div className="both">
          <button className="select">
            Visit Website
            <img
              alt="logo"
              height={440}
              width={480}
              src={
                "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
              }
              style={{ width: "10%", height: "auto", marginLeft: 10 }}
            ></img>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Buttons;
