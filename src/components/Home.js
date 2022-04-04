import React, { Fragment, useState, useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import BackgroundText from "./BackgroundText/BackgroundText";
import BackgroundLogo from "./BackgroundLogo/BackgroundLogo";
import Video from "./Video/Video";
import "./Home.css";
const Home = () => {
  const [height, setHeight] = useState(0);
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
      <div
        className="video-responsive"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <iframe
          style={{
            // width: "100%",
            height: 400,
          }}
          src={`https://www.youtube.com/embed/2CBzpg32RL8`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

      <div style={{ zIndex: 4 }} className="extra"></div>
    </Fragment>
  );
};
export default Home;
