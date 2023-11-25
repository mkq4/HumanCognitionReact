import "./Index.scss";
import Title from "./Title";
import GameCard from "./GameCard";
import react, { useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [cards, setCards] = react.useState([]);

  useEffect(() => {
    const cardsUrl = import.meta.env.VITE_ITEMS;
    axios.get(cardsUrl).then((res) => setCards(res.data));
  }, []);

  return (
    <main className="main">
      
      <Title />

      <section className="games">
        <div className="container">
          <div className="games__inner">
            <div id="small" className="small d-flex justify-center align-center">
              {cards.map((card, index) => {
                return (
                  <GameCard
                    key={index}
                    type={card.type}
                    size={card.size}
                    path={card.path}
                    imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
