import React, { Fragment, useEffect, useRef, useState } from "react";
import Sticky from "./Sticky";
import "./Sticky.css";
const PSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect().top);
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
    if (ref.current.getBoundingClientRect().top < -1034) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <p>Lorem ipsum...</p>
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Sticky />
      </div>
      <p>Lorem ipsum...</p>{" "}
      <img
        width={1775}
        height={2220}
        alt={"background"}
        style={{ maxWidth: "70%", height: "auto", zindex: 0 }}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/959290872514621450/vlad.webp"
        }
      ></img>
      <div style={{ height: 1000 }}></div>
    </Fragment>
  );
};
export default PSticky;
