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
  boxShadow: " 0 0 2px .5px #888",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#E8E8E8	",
};
const captionStyle = {
  textAlign: "center",
  border: "none",
  marginTop: "10px",
  borderRadius: "20px",
  padding: "5px",
  fontSize: "10px",
  boxShadow: " 0 0 2px .5px #888",
  fontFamily: "Courier New",
  backgroundColor: "White",
};
const nameStyle = {
  fontFamily: "Courier New",
};
const PictureCard = () => {
  return (
    <div style={pictureColumnStyle}>
      <h3 style={nameStyle}>
        <b> Sam Smith</b>
      </h3>
      <img style={pictureStyle} src="../../costar_headshot.png" alt="" />
      <div style={captionStyle}> Software Engineer at CoStar Group</div>
    </div>
  );
};

export default PictureCard;
