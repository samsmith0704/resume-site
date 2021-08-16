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
  const [currentHeaderItem, setCurrentHeaderItem] = React.useState(null);
  const [x, setX] = React.useState(false);
  const onMenuClick = (event) => {
    setX(!x);
    setCurrentHeaderItem(event.target.innerHTML);
  };

  React.useEffect(() => {
    if (currentHeaderItem !== null) {
      document.getElementById(currentHeaderItem).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [x]);
  return (
    <div style={outerHeaderStyle}>
      <br />
      <div style={innerHeaderStyle}>
        <HeaderItem headerItemTitle={"Skills"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Experience"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Education"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Portfolio"} />
      </div>
      <hr></hr>
    </div>
  );
};
//TODO: Make header fixed

export default Header;
