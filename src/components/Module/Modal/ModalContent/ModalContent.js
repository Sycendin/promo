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
          className="modal-news modal-text"
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
          className="modal-tickets modal-text"
        >
          Tickets
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-schedule modal-text"
        >
          Schedule
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-roster modal-text"
        >
          Roster
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/scores", "_blank")
          }
          className="modal-scores modal-text"
        >
          Scores
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/stats", "_blank")
          }
          className="modal-stats modal-text"
        >
          Stats
        </p>
      </div>
      <br />
    </Fragment>
  );
};
export default ModalContent;
