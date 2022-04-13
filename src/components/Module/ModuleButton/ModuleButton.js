import React, { Fragment, useState } from "react";
import "./ModuleButton.css";

const ModuleButton = ({ toggle, current }) => {
  console.log(current);
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    if (current === false) {
      toggle(true);
    } else {
      toggle(false);
    }
  };
  return (
    <Fragment>
      <div className="top-right">
        <div className={isActive ? "" : "change"} onClick={handleToggle}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default ModuleButton;
