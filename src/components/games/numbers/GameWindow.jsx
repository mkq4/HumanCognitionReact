import React from "react";
import './Index.scss'
import Game from "./Game";
const GameWindow = () => {
    const [gameState, setGameState] = React.useState('start')
  return (
    <div className="game-window">
      <div className="container">
        <div className="game-window-inner d-flex align-center justify-center">
            {gameState === 'start' ?
                <div onClick={ ()=> setGameState('game') } className="start-menu w100p h100p d-flex flex-column align-center justify-center cu-p">
                    <img src="../../../../public/images/svg/numbers.svg"/>
                    <h1 className="mt-20">Numbes Memory</h1>
                    <p className="mb-20">Click anywhere to start!</p>
                </div>
            : null}
            {gameState === 'game' ? 
                <Game/>
            : null}
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
