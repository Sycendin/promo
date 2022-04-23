import React, { Fragment } from "react";
import "./CardList.css";
import rosterData from ".../src/rosterData";
const CardList = () => {
  return (
    <Fragment>
      <div className="cardlist-div">
        {rosterData.map((data, i) => {
          return <Card key={i} card={rosterData[i]}></Card>;
        })}
      </div>
    </Fragment>
  );
};
export default CardList;
