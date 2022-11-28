import React from "react";
import { Button } from "./Button";
import "./Section.css";
import "../App.css";
function Section() {
  return (
    <div className="container">
      <video src="/video/Sectionmovie.mp4" autoPlay loop muted />
      <h1> Adeventure Awatis</h1>
      <p>What are you waiting for ?</p>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Get Start
      </Button>
      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        Watch Trailer <i className="far fa-play-circle" />
      </Button>
    </div>
  );
}

export default Section;
