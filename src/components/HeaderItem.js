import React from "react";

const HeaderItem = ({ headerItemTitle, onMenuClick }) => {
  const btnStyle = {
    border: "none",
    marginTop: "0px",
    marginLeft: "4%",
    marginRight: "4%",
    marginBottom: "0px",
    color: "grey",
    padding: "0px",
    backgroundColor: "AliceBlue",
  };

  return (
    <button
      style={btnStyle}
      onClick={(e) => {
        onMenuClick(e);
      }}
    >
      <h5>{headerItemTitle}</h5>
    </button>
  );
};

export default HeaderItem;
