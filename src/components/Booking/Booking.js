import React from "react";
import BookingForm from "./BookingForm/BookingForm";
import "./Booking.css";
function Reservation() {
  return (
    <div className="container">
      <div id="booking" className="booking">
        <div className="booking-grid">
          <div className="booking-left">
            <h1>Reserve a table</h1>
            <h4>Reserve your table at Little Lemon Today!</h4>
            <div className="booking-form">
              <BookingForm />
            </div>
          </div>
          <div className="booking-right">
            <h1>Opaning Times</h1>
            <h2>Monday: 5pm-10pm </h2>
            <h2>Tuesday: Closed</h2>
            <h2>Wednesday/Thursday: 5pm-10pm</h2>
            <h2>Friday: 2:30pm-10:30pm</h2>
            <h2>Sat: 12pm-1:45pm</h2>
            <h2>Saturday/Sunday: 12pm-10:30pm</h2>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
