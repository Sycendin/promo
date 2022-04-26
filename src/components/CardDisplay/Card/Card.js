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
        <p className="card-p">{card.name}</p>
        <span className="card-position">
          <p className="card-main-positions">{card.mainPosition}</p>
          <p className="card-main-positions"> </p>
          <p className="card-secondary-positions">{card.otherPosition}</p>
        </span>
      </div>
    </Fragment>
  );
};
export default Card;
