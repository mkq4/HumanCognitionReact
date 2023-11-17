import React from "react";
import Start from "../gameStates/Start";
import Game from "./Game";
import "./Index.scss"
const GameWindow = () => {
  const [windowState, setWindowState] = React.useState(false);
  return (
    <div className="game-window">
      <div className="container">
        <div className="game-window-inner">
          {windowState ? (
            <Game />
          ) : (
            <Start
              gameName={<p className="start-text d-flex justify-center mt-50 mb-50">Visual Memory</p>}
              content={
							<div className="d-flex flex-column align-center jusify-center mt-50">
								<img className="start-img" src="../../../../public/images/svg/visual.svg" alt="" />
								<button className="button mt-50" onClick={()=> setWindowState(true)}>Start</button>
							</div>
						}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
