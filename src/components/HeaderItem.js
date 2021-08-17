import React from "react";
import { useState } from "react";

const HeaderItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    backgroundColor: "BlanchedAlmond",
    // textDecoration: isHovered ? "underline" : "none",
    border: "none",
    borderRadius: "20px",
    marginLeft: "30px",
    marginRight: "30px",
    marginBottom: "0px",
    color: "Navy",
    fontFamily: "Courier New",
    padding: "0px",
  };

  const onHover = () => {
    setIsHovered(true);
  };

  const onLeaveHover = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={btnStyle}
      onClick={(e) => {
        props.onMenuClick(e);
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeaveHover}
    >
      <h5>{props.headerItemTitle}</h5>
    </button>
  );
};

export default HeaderItem;
