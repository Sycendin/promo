import React, { Fragment } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterTimeline = () => {
  const widthCheck = window.innerWidth;
  let select = {};
  if (widthCheck <= 600) {
    select = { height: "50vh", width: "70%" };
  } else {
    select = { height: "80vh", width: "35%" };
  }
  console.log(select);
  return (
    <Fragment>
      <div className="centerContent">
        <div className="selfCenter spaceBetween">
          <TwitterTimelineEmbed
            onLoad={function noRefCheck() {}}
            options={select}
            sourceType="timeline"
            theme="dark"
            userId="41468683"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default TwitterTimeline;
