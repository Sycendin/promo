import React, { Fragment } from "react";
import LogoText from "./LogoText/LogoText";
import SMSLinks from "./SMSLinks/SMSLinks";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-div">
        <LogoText />
        <SMSLinks />
        <Copyright />
      </div>
    </Fragment>
  );
};
export default Footer;
