import React, { Fragment } from "react";

const BackgroundImage = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          width={1775}
          height={2220}
          alt={"background"}
          style={{ maxWidth: "70%", height: "auto", zindex: 0 }}
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/959290872514621450/vlad.webp"
          }
        ></img>
      </div>
    </Fragment>
  );
};
export default BackgroundImage;
