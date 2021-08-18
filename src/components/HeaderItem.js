import React from "react";
import { useState } from "react";

const HeaderItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    border: "none",
    borderRadius: "20px",
    marginLeft: "30px",
    marginRight: "30px",
    marginBottom: "0px",
    color: "grey",
    padding: "0px",
    backgroundColor: "AliceBlue",
  };

  return (
    <button
      style={btnStyle}
      onClick={(e) => {
        props.onMenuClick(e);
      }}
    >
      <h5>{props.headerItemTitle}</h5>
    </button>
  );
};

export default HeaderItem;
