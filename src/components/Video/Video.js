import React, { Fragment } from "react";

const Video = () => {
  return (
    <Fragment>
      <video width="1920" height="1080" controls>
        <source
          src="https://www.youtube.com/watch?v=2CBzpg32RL8"
          type="video/mp4"
        ></source>
      </video>
    </Fragment>
  );
};
export default Video;
