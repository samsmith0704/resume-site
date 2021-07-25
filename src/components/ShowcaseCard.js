import React from "react";

const cardStyle = {
  border: "2px solid black",
  width: "200px",
  height: "200px",
};
const ShowcaseCard = ({ text }) => {
  return <div style={cardStyle}>{text}</div>;
};

export default ShowcaseCard;
