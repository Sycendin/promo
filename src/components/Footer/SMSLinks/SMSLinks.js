import React, { Fragment } from "react";
import "./SMSLinks.css";
const SMSLinks = ({ cName }) => {
  return (
    <Fragment>
      <div className={`${cName}-div`}>
        <img
          className={`${cName}-img`}
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
          className={`${cName}-img`}
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
          className={`${cName}-img`}
          width={256}
          height={256}
          alt="insta-icon"
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/961139304887894057/instagram-256.png"
          }
        ></img>
      </div>
    </Fragment>
  );
};
export default SMSLinks;
