import React, { useState } from "react";
import "./form.css";

export default function CardForm({ updateCardInfo }) {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [mm, setMM] = useState("");
  const [yy, setYY] = useState("");
  const [error, setError] = useState({});

  const formatCardNumber = (inputValue) => {
    const formattedValue = inputValue.replace(/\D/g, "").slice(0, 16);

    const formattedWithSpaces = formattedValue.replace(/(\d{4})/g, "$1 ");

    setCardNumber(formattedWithSpaces);
  };

  const handleCardholderNameChange = (e) => {
    const inputName = e.target.value;

    if (/^[A-Za-z\s]*$/.test(inputName)) {
      setCardholderName(inputName);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (cardholderName.trim() === "") {
      newError.cardholderName = "Cardholder name required";
    }

    if (cardNumber.trim() === "") {
      newError.cardNumber = "Card number required";
    }

    if (cvc.trim().length < 3 || isNaN(cvc)) {
      newError.cvc = "CVC must be numeric";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      const expDate = `${mm}/${yy}`;
      updateCardInfo({ cardholderName, cardNumber, cvc, expDate });
    }
  };

  return (
    <form className="cardForm" onSubmit={handleSubmit}>
      <label className="CARDHOLDER NAME">
        CARDHOLDER NAME
        <input
          type="text"
          value={cardholderName}
          onChange={handleCardholderNameChange}
          placeholder="e.g. Jane Appleseed"
          name="name"
          className="card-input"
        />
        {error.cardholderName && (
          <p className="info" aria-live="polite">
            {error.cardholderName}
          </p>
        )}
      </label>

      <label className="CARD NUMBER">
        CARD NUMBER
        <input
          type="text"
          onChange={(e) => formatCardNumber(e.target.value)}
          value={cardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          name="name"
          className="card-input"
        />
        {error.cardNumber && (
          <p className="info" aria-live="polite">
            {error.cardNumber}
          </p>
        )}
      </label>

      <div className="cvc-mmyy">
        <label className="labelmm labelyy">
          EXP.DATE (MM/YY)
          <div>
            <input
              type="text"
              placeholder="MM"
              name="mm"
              className="card-input"
              maxLength="2"
              pattern="^(0[1-9]|1[0-2])$"
              onChange={(e) => setMM(e.target.value)}
            />
            <input
              type="text"
              placeholder="YY"
              name="yy"
              className="card-input"
              maxLength="2"
              pattern="^[0-9]{2}$"
              onChange={(e) => setYY(e.target.value)}
            />
          </div>
        </label>

        <label className="labelcvc">
          CVC
          <input
            type="text"
            onChange={(e) => setCvc(e.target.value)}
            placeholder="e.g. 123"
            name="cvc"
            maxLength={3}
            className="card-input"
          />
          {error.cvc && (
            <p className="info" aria-live="polite">
              {error.cvc}
            </p>
          )}
        </label>
      </div>
      <button type="submit" className="btn-submit">
        Confirm
      </button>
    </form>
  );
}
