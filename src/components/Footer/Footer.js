import React, { Fragment } from "react";
import LogoText from "./LogoText/LogoText";
import SMSLinks from "./SMSLinks/SMSLinks";
import Copyright from "./Copyright/Copyright";
import SiteLinks from "../AppLinks/SiteLinks/SiteLinks";
import "./Footer.css";
import { Slide } from "react-awesome-reveal";
const Footer = () => {
  return (
    <Fragment>
      <div style={{ overflow: "hidden" }}>
        <Slide direction="up" duration={1000} triggerOnce="true">
          <div className="footer-div" style={{ overflow: "hidden" }}>
            <LogoText />
            <SiteLinks cName={"home-nav"} />
            <SMSLinks cName={"sms"} />
            <Copyright />
          </div>
        </Slide>
      </div>
    </Fragment>
  );
};
export default Footer;
