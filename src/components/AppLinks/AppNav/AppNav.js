import React, { Fragment } from "react";
import "./AppNav.css";
import SMSLinks from "../../Footer/SMSLinks/SMSLinks";

const AppNav = () => {
  return (
    <Fragment>
      <div className="app-nav-div">
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

        <div className="app-nav-sms-div">
          <img
            className="app-nav-sms-img"
            width={256}
            height={256}
            alt="twitter-icon"
            onClick={() =>
              window.open(
                "https://twitter.com/BlueJays?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                "_blank"
              )
            }
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/961139305345081344/twitter-icon-18-256.png"
            }
          ></img>
          <img
            onClick={() =>
              window.open("https://www.facebook.com/BlueJays/", "_blank")
            }
            className="app-nav-sms-img"
            width={256}
            height={256}
            alt="fb-icon"
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/961139305131147354/facebook-256.png"
            }
          ></img>
          <img
            onClick={() =>
              window.open("https://www.instagram.com/bluejays/?hl=en", "_blank")
            }
            className="app-nav-sms-img"
            width={256}
            height={256}
            alt="insta-icon"
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/961139304887894057/instagram-256.png"
            }
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default AppNav;
