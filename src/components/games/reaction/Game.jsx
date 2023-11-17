import React, { useEffect } from "react";
import End from "./End";
import "./Index.scss";
const Game = ({ gameStateStart }) => {
  const [gameState, setGameState] = React.useState(gameStateStart); // wait, click, miss, end
  const [waitTimer, setWaitTimer] = React.useState(null); // store the waitTimer in state
  const [clickTimer, setClickTimer] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const timerTime = () => {
    return Math.floor((Math.random() * 5 + 2) * 1000);
  };
  
  React.useEffect(() => { // хук, который следит за состоянием gameState
    if (gameState === "wait") {
      const timerId = setTimeout(() => {
        setGameState("click");
      }, timerTime());
      setWaitTimer(timerId); // store the timerId in state
    }
    if(gameState === 'click') {
      const clickTimer = new Date();
      setClickTimer(clickTimer)
    }
    if(gameState === 'end') {
      const lastTimer = new Date()
      const time = lastTimer - clickTimer
      setEndTime(time)
    }
  }, [gameState]);

  return (
    <>
      {gameState == "start" ? (
        <div
          onClick={() => setGameState("wait")}
          className="d-flex flex-column justify-center h100p"
        >
          <p className="reaction-title-game">Aim trainer</p>
          <div className="content d-flex flex-column align-center mt-20 mb-30">
            <img
              className="reaction-svg cu-p mt-30"
              src="../../../../public/images/svg/reaction.svg"
              alt="aim"
            />
            <div className="text">
              When the red box turns green, click as quickly as you can. <br />{" "}
              Click anywhere to start.
            </div>
          </div>
        </div>
      ) : null}
      {gameState == "wait" ? (
        <div
          onClick={() => {
            setGameState("miss");
            clearTimeout(waitTimer); // clear the waitTimer when the user clicks on the div
          }}
          className="wait h100p d-flex align-center justify-center"
        >
          <p className="wait-text">Wait for green!</p>
        </div>
      ) : null}
      {gameState == "click" ? (
        <div
          onClick={() => setGameState("end")}
          className="click-text h100p d-flex align-center justify-center"
        >
          CLICK!
        </div>
      ) : null}
      {gameState == "miss" ? (
        <div
          className="miss-text h100p d-flex align-center justify-center"
          onClick={() => setGameState("wait")}
        >
          To soon! <br /> <br /> Click to keep going
        </div>
      ) : null}
      {gameState == "end" ? <End time={endTime} /> : null}
    </>
  );
};

export default Game;
