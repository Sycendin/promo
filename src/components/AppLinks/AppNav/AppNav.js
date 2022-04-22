import React, { Fragment } from "react";
import "./AppNav.css";
import BackgroundLogo from "../../BackgroundLogo/BackgroundLogo";
import SiteLinks from "../SiteLinks/SiteLinks";
import SMSLinks from "../../Footer/SMSLinks/SMSLinks";
const AppNav = () => {
  const resize = () => {};
  return (
    <Fragment>
      <div className="app-nav-div">
        <BackgroundLogo resize={resize} cName={"app-nav-logo"} />
        <SiteLinks cName={"app-nav"} />
        <SMSLinks cName={"app-nav-sms"} />
      </div>
      <br />
    </Fragment>
  );
};

export default AppNav;
