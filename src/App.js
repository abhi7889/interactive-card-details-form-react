import React, { useState } from "react";
import CardForm from "./components/Form/CardForm";
import Card from "./components/CreditCard/Card";

export default function App() {
  const [cardInfo, setCardInfo] = useState({});

  const updateCardInfo = (newCardInfo) => {
    setCardInfo(newCardInfo);
    console.log("Updated cardInfo:", newCardInfo);
  };
  return (
    <>
      <Card cardInfo={cardInfo} />
      <CardForm updateCardInfo={updateCardInfo} />
    </>
  );
}
