import "./Index.scss";
import Header from "../../header/Index";
import GameWindow from "./GameWindow";
import GameDescription from "../GameDescription";
import Footer from "../../footer/Index";
const NumbersGame = () => {
  return (
    <>
      <Header />
      <GameWindow />
      <GameDescription
        title={"Number Memory"}
        text={
          <p>
            The average person can only remember 7 digit numbers reliably, but
            it`s possible to do much better using mnemonic techniques. Some
            helpful links are provided below.
          </p>
        }
      />
      <Footer />
    </>
  );
};

export default NumbersGame;
