import "./Index.scss";
import Header from '../../header/Index'
import GameWindow from "./GameWindow";
import GameDescription from '../GameDescription'
import Footer from "../../footer/Index";
const AimGame = () => {
  return (
    <>
      <Header />
      <GameWindow />
      <GameDescription
        text={
          <p>
            Aim Trainer Click the targets as quickly and accurately as you can.
            This tests reflexes and hand-eye coordination. Once you`ve clicked
            25 targets, your score and average time per target will be
            displayed. This test is best taken with a mouse or tablet screen.
            Trackpads are difficult to score well with.
          </p>
        }
        title={"Aim Trainer"}
      />
      <Footer/>
    </>
  );
};

export default AimGame;
