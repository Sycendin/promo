import React, { Fragment, useState, useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import BackgroundText from "./BackgroundText/BackgroundText";
import BackgroundLogo from "./BackgroundLogo/BackgroundLogo";
import Nav from "./Navigation/Navigation";
import Video from "./Video/Video";
import TwitterTimeline from "./TwitterTimeline/TwitterTimeline";
import Buttons from "./Buttons/Buttons";
import "./Home.css";
const Home = () => {
  window.scrollTo(0, 0);
  const [height, setHeight] = useState(0);
  // const [h, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);
  return (
    <Fragment>
      <div style={{}} className="wrapper">
        <div ref={ref} style={{ zIndex: 2 }} id="sticky">
          <BackgroundLogo />
          <BackgroundText />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {height ? <BackgroundImage margin={height} /> : null}
        </div>
      </div>
      <br />
      <Nav />
      <br />
      <Video />
      <br />
      <TwitterTimeline />
      <br />
      <Buttons />
      <div style={{ zIndex: 4 }} className="extra"></div>
    </Fragment>
  );
};
export default Home;
