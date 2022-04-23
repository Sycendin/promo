import React, { Fragment } from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <Fragment>
      <div className="card-div">
        <img src={card.image} height={320} width={213}></img>
        <p>{card.name}</p>
        <p>{card.position}</p>
      </div>
    </Fragment>
  );
};
export default Card;
