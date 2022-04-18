import React, { Fragment } from "react";
import "./Buttons.css";
import { Slide } from "react-awesome-reveal";
const Buttons = () => {
  return (
    <Fragment>
      <div className="button-div">
        <div className="both">
          <Slide direction="up" triggerOnce="true">
            <button
              className="select"
              onClick={() =>
                window.open("https://www.mlb.com/bluejays", "_blank")
              }
            >
              Visit Website
              <img
                className="visit-website-image"
                alt="logo"
                height={440}
                width={480}
                src={
                  "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
                }
              ></img>
            </button>
          </Slide>
        </div>
      </div>
    </Fragment>
  );
};
export default Buttons;
