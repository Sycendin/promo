import React, { Fragment } from "react";
import "./CardList.css";
import { fielders, relievers, starters } from "../../rosterData";
import { scheduleData } from "../../ScheduleData";
import Card from "./Card/Card";
const CardList = ({ type }) => {
  let allData = [];
  let restOfData = [];
  // Check type and add data to allData depending on it's value
  if (type === "roster") {
    allData = [fielders, relievers, starters];
  } else if (type === "schedule") {
    allData = [scheduleData];
  }
  return (
    <Fragment>
      {/* Loop through array(s) in allData */}
      {allData.map((currentArray, i) => {
        // Slice after first index in current array to only get data needed for display, not title
        restOfData = currentArray.slice(1);

        return (
          <div key={i} className="type-div">
            {/* Return a div that has the title depending on type */}
            <div className="cardlist-title">
              {/* Use the first data index of array to display title */}
              <p>{currentArray[0].type}</p>
            </div>

            {/* --- */}
            {/* Return a div that contains a Card component for each player in
            the data set if type is roster */}
            {type === "roster" ? (
              <div key={i} className="cardlist-div">
                {restOfData.map((data, i) => {
                  return <Card key={i} card={restOfData[i]} />;
                })}
              </div>
            ) : (
              // Return img htmls if on schedule page
              <div key={currentArray[i].image} className="cardlist-div">
                {restOfData.map((data, i) => {
                  return (
                    <img
                      className="schedule-img"
                      key={restOfData[i].image}
                      src={restOfData[i].image}
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
