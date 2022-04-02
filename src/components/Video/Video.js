import React, { Fragment } from "react";

const Video = () => {
  return (
    <Fragment>
      <video width="50%" height="50%" controls>
        <source
          src="https://www.youtube.com/watch?v=2CBzpg32RL8"
          type="video/mp4"
        ></source>
      </video>
    </Fragment>
  );
};
export default Video;
