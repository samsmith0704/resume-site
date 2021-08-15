import React from "react";
import PictureCard from "./PictureCard";
import ShowcaseCard from "./ShowcaseCard";
const scStyle = {
  display: "flex",
};

const ShowcaseContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <PictureCard />
          </div>
        </div>
        <div className="col-6">
          <h3 style={{ textAlign: "center", textDecoration: "overline" }}>
            Skills
          </h3>
          <div style={scStyle}>
            <ShowcaseCard text="Extensive experience: Javascript, React, Python" />
            <ShowcaseCard text="Broad knowledge: Java, SQL, HTML, CSS" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>NOTHING</div>
        </div>
        <div className="col-6">
          <h3 style={{ textAlign: "center", textDecoration: "overline" }}>
            Experience
          </h3>
          <div style={scStyle}>
            <ShowcaseCard text="Riggs Lab" />
            <ShowcaseCard text="CoStar Group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;
