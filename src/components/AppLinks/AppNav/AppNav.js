import React, { Fragment } from "react";
import "./AppNav.css";
import SMSLinks from "../../Footer/SMSLinks/SMSLinks";

const AppNav = () => {
  return (
    <Fragment>
      <img
        className="app-nav-logo"
        alt="logo"
        height={440}
        width={480}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
        }
      ></img>

      <span className="app-nav-span">
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/news", "_blank")
          }
          className="app-nav-text"
        >
          News
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/tickets", "_blank")
          }
          className="app-nav-text"
        >
          Tickets
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="app-nav-text"
        >
          Schedule
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="app-nav-text"
        >
          Roster
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/scores", "_blank")
          }
          className="app-nav-text"
        >
          Scores
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/stats", "_blank")
          }
          className="app-nav-text"
        >
          Stats
        </p>
      </span>
      <SMSLinks />
    </Fragment>
  );
};

export default AppNav;
