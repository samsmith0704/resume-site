import React from "react";
import { useState } from "react";

const HeaderItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const headerItemStyle = {
    marginLeft: "30px",
    marginRight: "30px",
    color: "Navy",
    fontFamily: "Courier New",
  };

  const btnStyle = {
    backgroundColor: "salmon",
    textDecoration: isHovered ? "underline" : "none",
    border: "none",
    borderRadius: "20px",
  };

  const onHover = () => {
    setIsHovered(true);
  };

  const onLeaveHover = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <button
        style={btnStyle}
        onClick={(e) => {
          props.onMenuClick(e);
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeaveHover}
      >
        <div style={headerItemStyle}>
          <h5>{props.headerItemTitle}</h5>
        </div>
      </button>
    </div>
  );
};

export default HeaderItem;
