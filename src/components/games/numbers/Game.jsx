import React from "react";
import './Index.scss'
import { Link } from "react-router-dom";
import axiosPatch from "../../axios";
const Game = () => {
  const [gameLevel, setGameLevel] = React.useState(1);
  const time = gameLevel * 1000 + 800;
  const [gameState, setGameState] = React.useState('numbers') // answer, numbers, win-menu, loose-menu
  const [userAnswer, setUserAnswer] = React.useState(null)
  const [trueAnswer, setTrueAnswer] = React.useState(null)
  
  const getRandomNumber = (count) => {
    let max = Math.pow(10, count) - 1;
    return Math.floor(Math.random() * max) + 1;
  };

  React.useEffect(() => {
    if (gameState === 'numbers') {
      setTrueAnswer(getRandomNumber(gameLevel));
      console.log(trueAnswer);

      setTimeout(() => {
        setGameState('answer');
      }, time);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);
  

  function checkAnswer() {
    console.log(typeof trueAnswer, typeof userAnswer);
    console.log(userAnswer);
    console.log();
    if (Number(userAnswer) === trueAnswer) {
      setGameState('win-menu')
      
    } else {
      setGameState('lose-menu')
    }
  }

  return (
    <div className="game-menu">
      <div className="game-menu-inner d-flex align-center justify-center">
        {gameState === 'numbers' ? 
          <div className="numbers d-flex align-center flex-column">
            <p className="mb-30">Remember the numbers</p>
            <p className="number mb-30">{trueAnswer}</p>
          </div> 
        : null}
        {gameState === 'answer' ? 
          <div className="answer-menu d-flex flex-column align-center">
            <input className="answer-input mb-40" type="text" onChange={(e) => setUserAnswer(e.target.value)} />
          <button className="answer-button button" onClick={() => {
            setTimeout(() => {
              checkAnswer();
            }, 200);
          }}>confirm</button>
          </div>
        : null}
        {gameState === 'win-menu' ? 
          <div className="win-menu d-flex flex-column align-center">
            <p>Level: {gameLevel}</p>
            <p className="mt-40">Great!</p>
            <button className="win-button button mt-50" onClick={() => {
              setGameLevel(gameLevel + 1)
              setGameState('numbers')
            }}>Next level</button>
          </div>
        : null}
        {gameState === 'lose-menu' ?
          <div className="lose-menu d-flex flex-column align-center">
            <p>Level: {gameLevel}</p>
            <p className="mt-30 mb-30">Correct answer - {trueAnswer}</p>
            <p className="mb-40">Your answer - {userAnswer}</p>
            <div className="end-menu-buttons d-flex align-center justify-center">
              <Link className="home-link cu-p" to="/">
                Home
              </Link>
              <Link to="/profile">
                <button
                  className="save-result cu-p"
                  onClick={() => {
                    const params = {
                      id: "4",
                      name: "Numbers Memory",
                      bestResult: gameLevel
                    };
                    axiosPatch(params);
                  }}
                >
                  Save result
                </button>
              </Link>
            </div>
            <button className="retry" onClick={() => window.location.reload()}>Retry</button>
          </div>
        : null}
      </div>
    </div>
  )};

export default Game
