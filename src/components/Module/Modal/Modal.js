import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

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
      ></div>
    </Fragment>,
    document.getElementById("portal")
  );
};
export default Modal;
