import React, { Fragment } from "react";
import "./BackgroundText.css";

const BackgroundText = () => {
  return (
    <Fragment>
      <span className="text-shadow span-animate">
        <span>
          <span>Opening Day:</span>
          <span className="opening-day-color"> April 8th</span>
        </span>
        <span>Experience It Live</span>
      </span>
    </Fragment>
  );
};
export default BackgroundText;
