import React, { Fragment, useEffect } from "react";
import "./BackgroundImage.css";
const BackgroundImage = ({ margin, resize }) => {
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  return (
    <Fragment>
      <img
        className="image-animation"
        width={1775}
        height={2220}
        alt={"background"}
        style={{
          position: "relative",
          marginTop: -(Math.ceil(margin) + 1),
          top: 0,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/959290872514621450/vlad.webp"
        }
        onLoad={resize}
      ></img>
    </Fragment>
  );
};
export default BackgroundImage;
