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
const showcaseItemTitleStyle = {
  textAlign: "center",
  textDecoration: "overline",
  color: "white",
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
            <h3 style={showcaseItemTitleStyle}>Skills</h3>

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
            <h3 style={showcaseItemTitleStyle}>Experience</h3>
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
            <h3 style={showcaseItemTitleStyle}>Education</h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard text="UVA" />
              <ShowcaseCard text="EMPTY" />
            </div>
          </div>
        </div>

        <div className="row" id="Portfolio">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={showcaseItemTitleStyle}>Portfolio</h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard text="EMPTY" />
              <ShowcaseCard text="EMPTY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;
