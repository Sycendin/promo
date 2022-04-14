import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ModalContent from "./ModalContent/ModalContent";
import SMSLinks from "../../Footer/SMSLinks/SMSLinks";
const Modal = ({ open, initialModal }) => {
  // if (!open) return null;

  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={
          initialModal
            ? "modal-style-intial"
            : open
            ? "modal_styles"
            : "modal_styles-change"
        }
      >
        {open ? <ModalContent /> : null}
        <br />
        {open ? <SMSLinks /> : null}
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};
export default Modal;