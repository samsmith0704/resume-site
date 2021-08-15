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

const Header = React.forwardRef((props, ref) => {
  const onMenuClick = (ref) => {
    console.log(ref);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={outerHeaderStyle}>
      <br />
      <div style={innerHeaderStyle}>
        <HeaderItem headerItemTitle={"Skills"} />
        <HeaderItem
          headerItemTitle={"Experience"}
          ref={ref}
          onMenuClick={onMenuClick}
        />
        <HeaderItem
          headerItemTitle={"Education"}
          ref={ref}
          onMenuClick={onMenuClick}
        />
        <HeaderItem headerItemTitle={"Portfolio"} />
      </div>
      <hr></hr>
    </div>
  );
});
//TODO: Make header fixed

export default Header;
