import React from "react";
import HeaderItem from "./HeaderItem";

const innerHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "15px",
  marginRight: "15px",
};

const outerHeaderStyle = {
  backgroundColor: "salmon",
};
const Header = () => {
  return (
    <div style={outerHeaderStyle}>
      <br />
      <div style={innerHeaderStyle}>
        <HeaderItem headerItemTitle={"Skills"} />
        <HeaderItem headerItemTitle={"Experience"} />
        <HeaderItem headerItemTitle={"Education"} />
        <HeaderItem headerItemTitle={"Portfolio"} />
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
