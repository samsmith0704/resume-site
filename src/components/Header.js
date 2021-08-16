import React from "react";
import HeaderItem from "./HeaderItem";

const innerHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "15px",
  marginRight: "15px",
};

const outerHeaderStyle = {
  backgroundColor: "BlanchedAlmond",
  position: "fixed",
  width: "100%",
  height: "15%",
};

const Header = () => {
  const [currentHeaderItem, setCurrentHeaderItem] = React.useState(null);
  const [changeTracker, setChangeTracker] = React.useState(false);
  const onMenuClick = (event) => {
    setChangeTracker(!changeTracker);
    setCurrentHeaderItem(event.target.innerHTML);
  };

  React.useEffect(() => {
    console.log(currentHeaderItem);
    if (currentHeaderItem !== null) {
      document.getElementById(currentHeaderItem)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [changeTracker]);
  return (
    <div style={outerHeaderStyle}>
      <br />
      <div style={innerHeaderStyle}>
        <HeaderItem headerItemTitle={"Skills"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Experience"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Education"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Portfolio"} />
      </div>
    </div>
  );
};
//TODO: Make header fixed

export default Header;
