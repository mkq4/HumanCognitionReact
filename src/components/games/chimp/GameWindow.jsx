import React from "react";
import GameDescription from "../GameDescription";
import "./Index.scss";
import Game from "./Game"
import Start from "./Start";
const GameWindow = () => {
  const [gameState, setGameState] = React.useState(false)
  return (
    <>
      <div className="game-window">
        <div className="container">
          <div onClick={() => setGameState(true)} className="game-window-inner d-flex align-center justify-center">
            {gameState ? <Game/> : <Start />}
          </div>
        </div>
      </div>
      <GameDescription
        title={"Chimpanzee test"}
        text={
          <>
            <p>
              This is a test of working memory, made famous by a study that
              found that chimpanzees consistently outperform humans on this
              task.
            </p>
            <br />
            <p>
              In the study, the chimps consistently outperformed humans, and
              some chimps were able to remember 9 digits over 90% of the time.
            </p>
            <br />
            <p>
              This test is a variant of that concept, that gets increasingly
              difficult every turn, starting at 4 digits, and adding one every
              turn. If you pass a level, the number increases. If you fail, you
              get a strike. Three strikes and the test is over.
            </p>
            <br />
            <p className="link">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=zsXP8qeFF6A"
                rel="noreferrer"
              >
                Youtube: Chimp vs Human!
              </a>
            </p>
          </>
        }
      />
    </>
  );
};

export default GameWindow;
