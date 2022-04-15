import React, { Fragment } from "react";
import "./ModalContent.css";

const ModalContent = () => {
  return (
    <Fragment>
      {/* <div className="modal-image2"> */}

      {/* </div> */}
      <div className="modal-image-div">
        <img
          className="modal-image2"
          alt="logo"
          height={440}
          width={480}
          src={
            "https://cdn.discordapp.com/attachments/958975018816131132/960059023883898920/BlueJaysLogo.webp"
          }
          // style={{ width: "20%", height: "auto", marginRight: "70%" }}
        ></img>
      </div>
      <div className="modal-div">
        <p
          className="modal-news"
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
          className="modal-tickets"
        >
          Tickets
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-schedule"
        >
          Schedule
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-roster"
        >
          Roster
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/scores", "_blank")
          }
          className="modal-scores"
        >
          Scores
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/stats", "_blank")
          }
          className="modal-stats"
        >
          Stats
        </p>
      </div>
      <br />
    </Fragment>
  );
};
export default ModalContent;
