import React, { Fragment } from "react";
import "./CardList.css";
import { fielders, relievers, starters } from "../../rosterData";
import Card from "./Card/Card";
const CardList = () => {
  const allData = [fielders, relievers, starters];

  return (
    <Fragment>
      {allData.map((playerType, i) => {
        return (
          <div key={i} className="cardlist-div">
            {playerType.map((data, i) => {
              return <Card key={i} card={playerType[i]}></Card>;
            })}
          </div>
        );
      })}
    </Fragment>
  );
};
export default CardList;
