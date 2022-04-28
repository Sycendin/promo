import React, { Fragment } from "react";
import "./CardList.css";
import { fielders, relievers, starters } from "../../rosterData";
import { scheduleData } from "../../ScheduleData";
import Card from "./Card/Card";
const CardList = ({ type }) => {
  let allData = [];
  if (type === "roster") {
    allData = [fielders, relievers, starters];
  } else if (type === "schedule") {
    allData = [scheduleData];
  }
  return (
    <Fragment>
      {/* Loop through the 3 data sets */}
      {allData.map((playerType, i) => {
        return (
          <div key={i} className="type-div">
            {/* Return a div that has the title depending on type */}
            <div className="cardlist-title">
              {" "}
              {(i === 0) & (type === "roster") ? (
                <p>Fielders</p>
              ) : (i === 1) & (type === "roster") ? (
                <p>Relievers</p>
              ) : (i === 3) & (type === "roster") ? (
                <p>Starters</p>
              ) : (
                <p>Schedule</p>
              )}
            </div>
            {/* --- */}
            {/* Return a div that contains a Card component for each player in
            the data set if type is roster */}
            {type === "roster" ? (
              <div key={i} className="cardlist-div">
                {playerType.map((data, i) => {
                  return <Card key={i} card={playerType[i]} />;
                })}
              </div>
            ) : (
              // Return img htmls instead if on schedule page
              <div key={playerType[i].image} className="cardlist-div">
                {playerType.map((data, i) => {
                  return (
                    <img
                      className="schedule-img"
                      key={playerType[i].image}
                      src={playerType[i].image}
                      width={600}
                      height={745}
                      alt="schedule"
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </Fragment>
  );
};
export default CardList;
