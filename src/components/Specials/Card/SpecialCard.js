import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./SpecialCard.css";

function SpecialCard(props) {
  return (
    <div className="card">
      <img src={props.imageFood} alt="cake"/>
      <div className="card-content">
        <div className="card-title">
          <h4>{props.name}</h4>
          <p className="price">£ {props.price}</p>
        </div>
        <p>
          Our {props.name} is the perfect combination of tangy and sweet. Made with
          fresh {props.name}, this pie has a light and creamy filling that is nestled
          in a flaky, buttery crust.
        </p>
        <h4 style={{ marginTop: "1em" }}>
          Order a Online{" "}
          <FontAwesomeIcon
            icon={faTruck}
            size={"sm"}
            color="black"
            style={{ paddingLeft: "5px" }}
          />
        </h4>
      </div>
    </div>
  );
}

export default SpecialCard;
