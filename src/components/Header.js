import React from "react";
import HeaderItem from "./HeaderItem";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
};
const Header = () => {
  return (
    <div>
      <div style={headerStyle}>
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
