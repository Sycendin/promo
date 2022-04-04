import React, { Fragment } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterTimeline = () => {
  return (
    <Fragment>
      <div className="centerContent">
        <div className="selfCenter spaceBetween">
          <TwitterTimelineEmbed
            onLoad={function noRefCheck() {}}
            options={{
              height: "80vh",
              width: "35%",
            }}
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
