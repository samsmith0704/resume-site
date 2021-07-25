import React from "react";
import { useState } from "react";

const HeaderItem = ({ headerItemTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const headerItemStyle = {
    marginLeft: "50px",
    marginRight: "50px",
    color: "blue",
  };

  const btnStyle = {
    backgroundColor: isHovered ? "grey" : "white",
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
        onMouseEnter={onHover}
        onMouseLeave={onLeaveHover}
      >
        <div style={headerItemStyle}>
          <h3>{headerItemTitle}</h3>
        </div>
      </button>
    </div>
  );
};

export default HeaderItem;
