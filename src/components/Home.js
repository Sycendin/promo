import React, { Fragment, useState, useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import BackgroundText from "./BackgroundText/BackgroundText";
import BackgroundLogo from "./BackgroundLogo/BackgroundLogo";
import Nav from "./Navigation/Navigation";
import Video from "./Video/Video";
import TwitterTimeline from "./TwitterTimeline/TwitterTimeline";
import Buttons from "./WebsiteButton/Buttons";
import PageTop from "./PageTop/PageTop";
import Footer from "./Footer/Footer";
import ModuleButton from "./Module/ModuleButton/ModuleButton";
import "./Home.css";
const Home = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const ref = useRef(null);
  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(ref.current.offsetHeight);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
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
        {/* Don't render modulebutton if vw is 600 or less */}
        {width <= 600 ? null : <Nav />}

        <Video />
        <br />
        <TwitterTimeline />
        <br />
        <Buttons />
        <PageTop />
        <br />
        {/* Render modulebutton if vw is 600 or less */}
        {width <= 600 ? <ModuleButton /> : null}
        <br />
        <Footer />
      </div>
    </Fragment>
  );
};
export default Home;
