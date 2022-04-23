import React, { Fragment } from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <Fragment>
      <div className="card-div">
        <img
          className="card-img"
          src={card.image}
          alt={"player face"}
          height={320}
          width={213}
        ></img>
        <p>{card.name}</p>
        <p>{card.position}</p>
      </div>
    </Fragment>
  );
};
export default Card;
