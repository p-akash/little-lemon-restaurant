import React, { useEffect } from "react";
import image from "../../assets/restauranfood.jpg";
import "./Hero.css";

function Hero() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    // main-bg is the full-width background of the section for color
    <div className="hero-bg">
      <div className="container">
        <main>
          <div id="Hero" className="hero-content">
            <div className="hero-left">
              <h1>Little Lemon</h1>
              <h2>Leicester</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod condimentum ante finibus consequat. Donec
                Mauris accumsan tellus mi, vitae rutrum felis scelerisque at.{" "}
              </p>
              <button onClick={handleSubmit} aria-label="Reserve a table">
                Reserve a table
              </button>
            </div>
            <div className="hero-right">
              <img src={image} alt="img"/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
