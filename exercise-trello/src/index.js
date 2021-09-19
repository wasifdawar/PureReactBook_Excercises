import React from "react";
import ReactDOM from "react-dom";
import CardTitle from "./CardTitle";
import CardData from "./CardData";
import AddCard from "./AddCard";
import "./index.css";

const CardContainer = ({ card }) => (
  <div className="card-container">
    <div>
      <CardTitle cardtitle={card.cardtitle} />
    </div>
    <div className="card-data">
      <CardData title={card.speaker} />
      <CardData title={card.type} />
      <CardData title={card.mode} />
      <CardData title={card.designfront} />
      <CardData title={card.designback} />
      <CardData title={card.mobile} />
    </div>
    <AddCard />
  </div>
);

const CardList = ({ cards }) => (
  <div className="card-list">
    <div className="">
      {cards.map((card) => (
        <CardContainer key={card.id} card={card} />
      ))}
    </div>
  </div>
);

const data = [
  {
    id: 1,
    cardtitle: "Phone Features",
    speaker: "Subwoofer",
    type: "Non-porous, washable",
    mode: "Wings",
    designfront: "Beveled Bezel",
    designback: "Bezeled Bevel",
    mobile: "Seedless",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <CardList cards={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
