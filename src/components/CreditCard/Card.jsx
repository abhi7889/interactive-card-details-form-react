import React from "react";
import "./Card.css";

export default function Card({ cardInfo }) {
  return (
    <aside className="card">
      <div className="cardFront">
        <div className="logo">
          <div className="circle"></div>
          <div className="border-circle"></div>
        </div>
        <div className="card-number">
          {cardInfo.cardNumber || "0000 0000 0000 0000"}
        </div>

        <div className="name-exp">
          <div className="cardholderName">
            {cardInfo.cardholderName || "ABHISHEK SHARMA"}
          </div>
          <div className="exp-date">{cardInfo.expDate || "00/00"}</div>
        </div>
      </div>

      <div className="cardBack">
        <div className="card-cvc">{cardInfo.cvc || "000"}</div>
      </div>
    </aside>
  );
}
