import React, { Fragment } from "react";
import "./AppNav.css";
import SMSLinks from "../../Footer/SMSLinks/SMSLinks";
import BackgroundLogo from "../../BackgroundLogo/BackgroundLogo";
const AppNav = () => {
  return (
    <Fragment>
      <div className="app-nav-div">
        <BackgroundLogo cName={"app-nav-logo"} />
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
        <SMSLinks cName={"app-nav-sms"} />
      </div>
    </Fragment>
  );
};

export default AppNav;
