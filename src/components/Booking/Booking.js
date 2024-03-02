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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
              purus vitae neque commodo pulvinar. Nunc venenatis quis lorem ac
              varius. Curabitur justo est, pretium eget metus at, auctor rhoncus
              elit. Donec eget massa sem. Pellentesque pellentesque enim et
              neque scelerisque, eget scelerisque quam vulputate. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
