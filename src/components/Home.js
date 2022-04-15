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
import Modal from "./Module/Modal/Modal";
import "./Home.css";
const Home = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [divHeight, setDivHeight] = useState(null);
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [initialModal, setInitialModal] = useState(true);
  const ref = useRef(null);
  const resize = () => {
    setWidth(window.innerWidth);
    setDivHeight(ref.current.offsetHeight);
    setInitialModal(true);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    setDivHeight(ref.current.offsetHeight);
  }, []);
  return (
    <Fragment>
      <div className="home-body" style={{ zIndex: 9, position: "relative" }}>
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
            {divHeight ? (
              <BackgroundImage margin={divHeight} resize={resize} />
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
        <Footer />
      </div>
      {/* Render modulebutton if vw is 600 or less */}
      {width <= 600 ? (
        <ModuleButton
          toggle={setIsOpen}
          setInitialModal={setInitialModal}
          current={isOpen}
        />
      ) : null}
      <Modal open={isOpen} initialModal={initialModal}></Modal>
    </Fragment>
  );
};
export default Home;
