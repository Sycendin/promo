import React, { Fragment, useState } from "react";
import "./ModuleButton.css";

const ModuleButton = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    console.log("dss");
    setActive(!isActive);
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
