import React, { Fragment, useEffect } from "react";
import "./Intro.css";
const Intro = ({ change }) => {
  useEffect(() => {
    const visted = () => {
      localStorage.setItem("visted", JSON.stringify("yes"));
      change();
    };
    const set = () => {
      setTimeout(visted, 6000);
    };
    set();
  }, [change]);
  return (
    <Fragment>
      <div className="intro-img-div">
        <img
          className="image-one"
          width={640}
          height={471}
          alt="vlad"
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/962914123253952523/vlad.webp"
          }
        ></img>
        <img
          className="image-two"
          width={640}
          height={485}
          alt="springer"
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/962914123069411378/george.webp"
          }
        ></img>
        <img
          className="image-three"
          width={416}
          height={624}
          alt="bo"
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/962914122796793856/bo.webp"
          }
        ></img>
      </div>
      <div className="intro-div">
        <p className="intro-text first">Are</p>
        <p className="intro-text second">You</p>
        <p className="intro-text third third-color">Ready?</p>
      </div>
    </Fragment>
  );
};
export default Intro;
