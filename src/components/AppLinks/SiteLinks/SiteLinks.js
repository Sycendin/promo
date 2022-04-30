import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./SiteLinks.css";
const SiteLinks = ({ cName }) => {
  return (
    <Fragment>
      <span className={cName + "-span"}>
        <Link to={"/promo/"} style={{ textDecoration: "none" }}>
          {" "}
          <p className={cName + "-text"}>Home</p>
        </Link>
        <Link to={"/promo/news"} style={{ textDecoration: "none" }}>
          <p className={cName + "-text"}>News</p>
        </Link>
        <Link to={"/promo/schedule"} style={{ textDecoration: "none" }}>
          <p className={cName + "-text"}>Schedule</p>
        </Link>
        <Link to={"/promo/roster"} style={{ textDecoration: "none" }}>
          <p className={cName + "-text"}>Roster</p>
        </Link>
      </span>
    </Fragment>
  );
};
export default SiteLinks;
