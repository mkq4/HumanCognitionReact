import Start from "../gameStates/Start";
import Game from "./AimGame";
import End from "./End";
import { useState } from "react";

import "./Index.scss";
const GameWindow = () => {
  const [windowState, setWindowState] = useState("start");

  return (
    <div className="game-window">
      <div className="container">
        <div className="game-window-inner">
          {windowState === "start" ? (
            <Start
              gameName={<p className="aim-title-game">Aim trainer</p>}
              content={
                <div className="content d-flex flex-column align-center">
                  <img onClick={() => setWindowState('game')} className="aim-svg cu-p mt-30" src="../../../../public/images/svg/aim.svg" alt="aim" />
                  <div className="text">
                    Hit 25 targets as quickly as you can. <br /> Click the target to start
                  </div>
                </div>
              }
            />
          ) : null}

          {windowState === "game" ? <Game setWindowState={setWindowState} /> : null}

          {windowState === "end" ? <End /> : null}
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
