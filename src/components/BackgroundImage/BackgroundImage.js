import React, { Fragment, useEffect } from "react";

const BackgroundImage = ({ margin, resize }) => {
  useEffect(() => {
    const reset = () => {
      console.log("reset");
      resize();
    };
    window.addEventListener("resize", reset);
    return (_) => {
      window.removeEventListener("resize", reset);
    };
  });
  return (
    <Fragment>
      <img
        width={1775}
        height={2220}
        alt={"background"}
        style={{
          position: "relative",
          maxWidth: "70%",
          height: "auto",
          marginTop: -margin,
          top: 0,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/959290872514621450/vlad.webp"
        }
      ></img>
    </Fragment>
  );
};
export default BackgroundImage;
