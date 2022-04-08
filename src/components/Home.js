import React, { Fragment, useState, useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import BackgroundText from "./BackgroundText/BackgroundText";
import BackgroundLogo from "./BackgroundLogo/BackgroundLogo";
import Nav from "./Navigation/Navigation";
import Video from "./Video/Video";
import TwitterTimeline from "./TwitterTimeline/TwitterTimeline";
import Buttons from "./WebsiteButton/Buttons";
import Footer from "./Footer/Footer";
import "./Home.css";
const Home = () => {
  window.scrollTo(0, 0);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);
  const resize = () => {
    setHeight(ref.current.offsetHeight);
  };
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);
  return (
    <Fragment>
      <div className="home-body">
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
            {height ? (
              <BackgroundImage margin={height} resize={resize} />
            ) : null}
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
        <br />
        <Footer />
      </div>
    </Fragment>
  );
};
export default Home;
