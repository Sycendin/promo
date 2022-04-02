import React, { Fragment, useState, useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import BackgroundText from "./BackgroundText/BackgroundText";
import Video from "./Video/Video";

const Home = () => {
  const parent = useRef(null);
  const [divH, setdivH] = useState();

  useEffect(() => {
    setdivH(parent.current.getBoundingClientRect().height);
  }, [divH]);
  return (
    <Fragment>
      <div
        ref={parent}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {divH ? <BackgroundText divH={divH} /> : null}
        <BackgroundImage />
      </div>
      <Video></Video>
      <div style={{ height: 800 }}></div>
    </Fragment>
  );
};
export default Home;
