import React, { Fragment } from "react";
import "./PageTop.css";
const PageTop = () => {
  return (
    <Fragment>
      <div className="page-top-div">
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="up-logo"
          height={256}
          width={256}
          alt="page-up"
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/961853765328175134/up.webp"
          }
        ></img>
        <p className="up-text">Top of Page</p>
      </div>
    </Fragment>
  );
};
export default PageTop;
