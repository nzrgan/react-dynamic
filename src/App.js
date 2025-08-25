import React, { useState } from "react";
import "./App.css";

const cardsData = [
  { id: 4, title: "Dynamic Card 1", text: "Loaded via state.", img: "https://picsum.photos/200/300/?blur.jpg" },
  { id: 5, title: "Dynamic Card 2", text: "Props and state example.", img: "https://picsum.photos/200/300" },
  { id: 6, title: "Dynamic Card 3", text: "Reusable card component.", img: "https://picsum.photos/id/58/1280/853.jpg" },
  { id: 7, title: "Dynamic Card 4", text: "Another card dynamically rendered.", img: "https://picsum.photos/200/300.jpg" }
];

function Card({ title, text, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function App() {
  const [cards] = useState(cardsData);

  return (
    <div>
      <section className="hero">
        <h1>Dynamic Project</h1>
        <p>This version uses state and props.</p>
        <button>Explore More</button>
      </section>

      <section className="cards">
        {cards.map((c) => (
          <Card key={c.id} title={c.title} text={c.text} img={c.img} />
        ))}
      </section>
    </div>
  );
}

export default App;
