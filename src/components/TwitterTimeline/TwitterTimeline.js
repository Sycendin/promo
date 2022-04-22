import React, { Fragment } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./TwitterTimeline.css";
const TwitterTimeline = ({ cOptions }) => {
  const widthCheck = window.innerWidth;
  let select = {};
  // Check if timeline is from news page otherwise render based on page width
  if (!cOptions) {
    if (widthCheck <= 600) {
      select = { height: "50vh", width: "70%" };
    } else {
      select = { height: "80vh", width: "35%" };
    }
  } else {
    select = cOptions;
  }
  return (
    <Fragment>
      <div className="timeline-divs">
        <TwitterTimelineEmbed
          onLoad={function noRefCheck() {}}
          options={select}
          sourceType="timeline"
          theme="dark"
          userId="41468683"
        />
      </div>
    </Fragment>
  );
};
export default TwitterTimeline;
