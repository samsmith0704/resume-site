import React from "react";
import PictureCard from "./PictureCard";
import ShowcaseCard from "./ShowcaseCard";
import Header from "./Header";

//TODO:
/**
 * Link Github and LinkedIn
 * Get links in header fully working
 * add margin bottom to header
 * Add some of the stuff to common component, there is so much repeated code here
 */

const myContainerStyle = {
  width: "400px",
  height: "400px",
  position: "relative",
  background: "yellow",
};
const myAnimationStyle = {
  width: "50px",
  height: "50px",
  position: "absolute",
  backgroundColor: "red",
};

////////////Testing out animation
let id = null;
const myMove = () => {
  console.log("message");
  let elem = document.getElementById("myAnimation");
  let pos = 0;
  clearInterval(id);
  const frame = () => {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  };
  id = setInterval(frame, 10);
};

const TestBtn = () => {
  return <button onClick={myMove}>Click Me</button>;
};
const TestAnimation = () => {
  return <div style={myAnimationStyle} id="myAnimation"></div>;
};
const TestContainer = () => {
  return (
    <div style={myContainerStyle} id="myContainer">
      <TestAnimation />
    </div>
  );
};
////////////testing out animation
const showcaseCardStyle = {
  display: "flex",
};
const showcaseItemTitleStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "grey",
  borderRadius: "5px",
};
const headerActivationButtonStyle = {
  position: "fixed",
};
const HeaderActivationButton = ({ onClick }) => {
  return (
    <button
      className={"btn btn-primary"}
      style={headerActivationButtonStyle}
      onClick={onClick}
    >
      Show menu
    </button>
  );
};
const ShowcaseContainer = () => {
  const [showHeader, setShowHeader] = React.useState(true);
  const [showHeaderActivationButton, setShowHeaderActivationButton] =
    React.useState(false);

  const handleHeaderActivation = () => {
    setShowHeaderActivationButton(false);
    setShowHeader(true);
    console.log(showHeader);
  };

  return (
    <div
      onWheel={() => {
        setShowHeader(window.scrollY === 0);
        setShowHeaderActivationButton(!showHeader);
      }}
    >
      <div>{showHeader && <Header />}</div>
      <div style={{ textAlign: "center" }}>
        {" "}
        {showHeaderActivationButton && (
          <HeaderActivationButton onClick={handleHeaderActivation} />
        )}
      </div>

      <br />
      <br />
      <br />
      <br />
      <TestBtn />
      <TestContainer />
      <div className="container">
        <div className="row" id="Skills">
          <div className="col">
            <div>
              <PictureCard />
            </div>
          </div>
          <div className="col-6">
            <div style={showcaseItemTitleStyle}>
              <h3>Skills</h3>
            </div>

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
        <div className="row" id="Contact Info">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={showcaseItemTitleStyle}>Contact Info</h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard link={"https://github.com/samsmith0704/"} />
              <ShowcaseCard text="EMPTY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;
