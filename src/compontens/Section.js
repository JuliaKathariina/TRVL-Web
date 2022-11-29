import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Section.css";
import movie from "../compontens/Pages/video/Sectionmovie.mp4";
function Section() {
  return (
    <div className="container">
      <video src={movie} autoPlay loop muted type />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Section;
