import React from "react";
import PictureCard from "./PictureCard";
import ShowcaseCard from "./ShowcaseCard";
import Header from "./Header";

//TODO:
/**
 * Link Github and LinkedIn
 * Get links in header fully working
 * add margin bottom to header
 */
const showcaseCardStyle = {
  display: "flex",
};

const ShowcaseContainer = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row" id="Skills">
          <div className="col">
            <div>
              <PictureCard />
            </div>
          </div>
          <div className="col-6">
            <h3 style={{ textAlign: "center", textDecoration: "overline" }}>
              Skills
            </h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard
                boldedText={"Extensive Experience: "}
                text="Javascript, React, Python"
              />
              <ShowcaseCard
                boldedText={"Broad Knowledge: "}
                text="Java, SQL, HTML, CSS"
              />
            </div>
          </div>
        </div>
        <div className="row" id="Experience">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={{ textAlign: "center", textDecoration: "overline" }}>
              Experience
            </h3>
            <div style={showcaseCardStyle}>
              <ShowcaseCard text="Riggs Lab" />
              <ShowcaseCard text="CoStar Group" />
            </div>
          </div>
        </div>

        <div className="row" id="Education">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={{ textAlign: "center", textDecoration: "overline" }}>
              Education
            </h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard text="UVA" />
              <ShowcaseCard text="EMPTY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;
