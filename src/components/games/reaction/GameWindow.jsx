import React, { useState } from "react";
import GameDescription from "../GameDescription";
import Start from "../gameStates/Start";
import Game from "./Game";
import "./Index.scss";
const GameWindow = () => {
  const [game, setGame] = useState(false);
  return (
    <>
      <div className="game-window">
          <div
            onClick={() => {
              setGame(true);
            }}
            className="game-window-inner cu-p"
          >
            {game === true ? <Game gameStateStart={'start'}/> : <Game gameStateStart={'start'}/>}
          </div>
      </div>
      <GameDescription
        title={"Reaction Speed"}
        text={
          <p>
            About the test This is a simple tool to measure your reaction time.
            The average (median) reaction time is 273 milliseconds, according to
            the data collected so far. In addition to measuring your reaction
            time, this test is affected by the latency of your computer and
            monitor. Using a fast computer and low latency / high framerate
            monitor will improve your score. Scores in this test are faster than
            the aim trainer test, because you can react instantly without moving
            the cursor. This is discussed in further detail on the the
            statistics page. While an average human reaction time may fall
            between 200-250ms, your computer could be adding 10-50ms on top.
            Some modern TVs add as much as 150ms
          </p>
        }
      />
    </>
  );
};

export default GameWindow;
