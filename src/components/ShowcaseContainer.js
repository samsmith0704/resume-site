import React from "react";
import PictureCard from "./PictureCard";
import ShowcaseCard from "./ShowcaseCard";
import Header from "./Header";
const scStyle = {
  display: "flex",
};

const ShowcaseContainer = () => {
  const contentRef = React.createRef();

  return (
    <div>
      <Header ref={contentRef} />

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
        <div className="row">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3
              ref={contentRef}
              style={{ textAlign: "center", textDecoration: "overline" }}
            >
              Experience
            </h3>
            <div style={scStyle}>
              <ShowcaseCard text="Riggs Lab" />
              <ShowcaseCard text="CoStar Group" />
            </div>
          </div>
        </div>

        <div ref={contentRef} className="row">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={{ textAlign: "center", textDecoration: "overline" }}>
              Education
            </h3>

            <div style={scStyle}>
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
