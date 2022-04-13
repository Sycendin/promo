import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ open }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Fragment>
      <div className="modal_styles"></div>
    </Fragment>,
    document.getElementById("portal")
  );
};
export default Modal;
