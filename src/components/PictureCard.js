import React from "react";

const pictureStyle = {
  height: "200px",
  borderRadius: "200px",
  boxShadow: " 0 0 2px .5px #888",
};

const pictureColumnStyle = {
  width: "200px",
  margin: "20px",
  textAlign: "center",
};
const captionStyle = {
  textAlign: "center",
  border: "none",
  marginTop: "10px",
  borderRadius: "20px",
  padding: "5px",
  fontSize: "10px",
  boxShadow: " 0 0 2px .5px #888",
  fontFamily: "Comic Sans MS",
};
const nameStyle = {
  fontFamily: "Comic Sans MS",
};
const PictureCard = () => {
  return (
    <div style={pictureColumnStyle}>
      <h3 style={nameStyle}>Sam Smith</h3>
      <img style={pictureStyle} src="../../self-portrait.jpg" alt="" />
      <div style={captionStyle}> Software Engineer at CoStar Group</div>
    </div>
  );
};

export default PictureCard;
