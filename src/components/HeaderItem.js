import React from "react";
import { useState } from "react";

const HeaderItem = ({ headerItemTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const headerItemStyle = {
    marginLeft: "30px",
    marginRight: "30px",
    color: "Navy",
    fontFamily: "Comic Sans MS",
  };

  const btnStyle = {
    backgroundColor: isHovered ? "grey" : "salmon",
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
          <h5>{headerItemTitle}</h5>
        </div>
      </button>
    </div>
  );
};

export default HeaderItem;
