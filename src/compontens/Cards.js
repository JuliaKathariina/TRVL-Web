import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
import nordpol from "../compontens/images/Nordpol.jpg";
import img2 from "../compontens/images/img2.jpg";
import img3 from "../compontens/images/img-home.jpeg";
import img5 from "../compontens/images/img5.jpg";
export default function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <Carditem
              src={nordpol}
              text="Between snow, northern lights and new cultures."
              label="Adeventure"
              path="/services"
            />
            <Carditem
              src={img2}
              text="Explore the hidden."
              label="Adeventure"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <Carditem
              src={img3}
              text="The beautiful places of Sweden."
              label="Adeventure"
              path="/services"
            />
            <Carditem
              src={img5}
              text="The mountains of Switzerland and in search of hope."
              label="Adeventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
