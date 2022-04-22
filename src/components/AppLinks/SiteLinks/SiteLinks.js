import React, { Fragment } from "react";
import "./SiteLinks.css";
const SiteLinks = ({ cName }) => {
  return (
    <Fragment>
      <span className={cName + "-span"}>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/news", "_blank")
          }
          className={cName + "-text"}
        >
          News
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/tickets", "_blank")
          }
          className={cName + "-text"}
        >
          Tickets
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className={cName + "-text"}
        >
          Schedule
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className={cName + "-text"}
        >
          Roster
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/scores", "_blank")
          }
          className={cName + "-text"}
        >
          Scores
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/stats", "_blank")
          }
          className={cName + "-text"}
        >
          Stats
        </p>
      </span>
    </Fragment>
  );
};
export default SiteLinks;
