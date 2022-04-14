import React, { Fragment } from "react";
import "./ModalContent.css";

const ModalContent = () => {
  return (
    <Fragment>
      {/* <div className="modal-image2"> */}

      {/* </div> */}
      <img
        className="modal-image2"
        alt="logo"
        height={440}
        width={480}
        src={
          "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
        }
        style={{ width: "20%", height: "auto", marginRight: "70%" }}
      ></img>
      <div className="modal-div">
        <p
          className="modal-text"
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/news", "_blank")
          }
        >
          News
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/tickets", "_blank")
          }
          className="modal-text"
        >
          Tickets
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-text"
        >
          Schedule
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-text"
        >
          Roster
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/scores", "_blank")
          }
          className="modal-text"
        >
          Scores
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/stats", "_blank")
          }
          className="modal-text"
        >
          Stats
        </p>
      </div>
    </Fragment>
  );
};
export default ModalContent;
