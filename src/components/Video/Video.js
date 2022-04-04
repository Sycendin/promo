import React, { Fragment } from "react";
import "./Video.css";
const Video = () => {
  return (
    <Fragment>
      <div className="video-responsive" style={{}}>
        <iframe
          style={{}}
          src={`https://www.youtube.com/embed/2CBzpg32RL8`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Fragment>
  );
};
export default Video;
