import React, { Fragment } from "react";
import "./Navigation.css";
const Nav = () => {
  return (
    <Fragment>
      <span className="span-p">
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/news", "_blank")
          }
          className="text"
        >
          News
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/tickets", "_blank")
          }
          className="text"
        >
          Tickets
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="text"
        >
          Schedule
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="text"
        >
          Roster
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/scores", "_blank")
          }
          className="text"
        >
          Scores
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/stats", "_blank")
          }
          className="text"
        >
          Stats
        </p>
      </span>
    </Fragment>
  );
};
export default Nav;
