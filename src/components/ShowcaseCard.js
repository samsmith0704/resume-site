import React from "react";
//test
const cardStyle = {
  border: "2px solid black",
  width: "200px",
  height: "150px",
  padding: "20px",
  margin: "15px",
  fontSize: "12px",
};
const ShowcaseCard = ({ boldedText, text }) => {
  return (
    <div style={cardStyle}>
      <b>{boldedText}</b>
      <br /> <br />
      {text}
    </div>
  );
};

export default ShowcaseCard;
