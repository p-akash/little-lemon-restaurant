import React from "react";
import SpecialCard from "./Card/SpecialCard";
import image from "../../assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg";
import image1 from "../../assets/chad-montano-eeqbbemH9-c-unsplash.jpg";
import image2 from "../../assets/lemon.jpg"
import "./Specials.css";

function Specials() {
  return (
    <div className="specials-bg">
      <div className="container">
        <div className="specials">
          <h1>Today's specials</h1>
          <div className="specials-grid">
            <SpecialCard imageFood={image1} name="Pan Cake" price="3.59" />
            <SpecialCard imageFood={image} name="Chees Cake" price="2.99"/>
            <SpecialCard imageFood={image2} name="Lemon Cake" price="3.59"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
