import React, { Fragment } from "react";
import "./CardList.css";
import { fielders, relievers, starters } from "../../rosterData";
import Card from "./Card/Card";
const CardList = () => {
  const allData = [fielders, relievers, starters];
  return (
    <Fragment>
      {/* Loop through the 3 data sets */}
      {allData.map((playerType, i) => {
        return (
          <div className="type-div">
            {/* Return a div that has the title of that data set */}
            <div className="cardlist-title">
              {" "}
              {i === 0 ? (
                <p>Fielders</p>
              ) : i === 1 ? (
                <p>Relievers</p>
              ) : (
                <p>Starters</p>
              )}
            </div>
            {/* Return a div that contains a Card component for each player in
            the data set */}
            <div key={i} className="cardlist-div">
              {playerType.map((data, i) => {
                return <Card key={i} card={playerType[i]}></Card>;
              })}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default CardList;
