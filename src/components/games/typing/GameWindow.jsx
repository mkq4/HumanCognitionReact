import React, { useState, useEffect } from "react";
import texts from "./Texts";
import End from "./End";
import { Link } from "react-router-dom";
import axiosPatch from "../../axios";
const GameWindow = () => {
  const [text, setText] = useState("");
  const [letterCounter, setLetterCounter] = useState(1);
  const [keyCounter, setKeyCounter] = useState("");
  const [textCharacters, setTextCharacters] = useState("");
  const [prevLetterIndex, setPrevLetterIndex] = useState(null);
  const [miss, setMiss] = useState(0);
  const [gameState, setGameState] = useState("start");
  const [startTimer, setStartTimer] = useState(false);
  const [endTimer, setEndTimer] = useState();
  const [timer, setTimer] = useState();
  const [result, setResult] = useState(0)
  useEffect(() => {
    const timer = new Date();
    setTimer(timer);
  }, []);

  useEffect(() => {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 20);
    };
    const textId = getRandomNumber();
    const selectedText = texts.find((text) => text.id === textId);
    if (selectedText) {
      setText(selectedText.text);
      setTextCharacters(
        selectedText.text.split("").map((char, index) => (
          <span className="letter" key={index}>
            {char}
          </span>
        ))
      );
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (event) => {
    let key = event.key;
    console.log(key);
    if (key === textCharacters[letterCounter].props.children) {
      console.log(true);
      setTextCharacters((prevTextCharacters) =>
        prevTextCharacters.map((char, index) => {
          if (index === letterCounter) {
            return (
              <span key={index} className="used">
                {char.props.children}
              </span>
            );
          } else if (index === prevLetterIndex) {
            return (
              <span key={index} className="letter">
                {char.props.children}
              </span>
            );
          } else {
            return char;
          }
        })
      );
      setPrevLetterIndex(letterCounter);
      setLetterCounter(letterCounter + 1);
      setStartTimer(true);
    } else {
      setMiss(miss + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleKeyPress]);
  useEffect(() => {
    if (letterCounter == textCharacters.length) {
      const endTime = new Date();
      setEndTimer(endTime);
      console.log("start time " + timer, "end time " + endTime);
      setGameState("end");
      const secondsBetween = (((endTime - timer) / 1000) )
      setResult(Math.round(textCharacters.length / secondsBetween))
    }
  }, [letterCounter]);
  console.log(gameState);
  return (
    <>
      {gameState === "start" ? (
        <div onClick={() => setGameState("game")} className="start-menu">
          Just click anywhere and start typing
        </div>
      ) : null}
      {gameState === "game" ? (
        <div className="game-window">
          <div className="container">
            <div className="game-window-inner d-flex align-center">
              <div className="text">{textCharacters}</div>
            </div>
          </div>
        </div>
      ) : null}
      {gameState === "end" ? (
        // <End start={startTimer} end={endTimer} length={textCharacters.length} />
        <div className="end-menu">
          <div className="time mb-50">
            Symbols per second <br /> <span>{result}</span>
          </div>
          <div className="end-menu-buttons d-flex align-center justify-center">
            <Link className="home-link cu-p" to="/">
              Home
            </Link>
            <Link to="/profile">
              <button
                className="save-result cu-p"
                onClick={() => {
                  const params = {
                    id: "6",
                    name: "Typing Test",
                    bestResult: result + ' symbols',
                  };
                  axiosPatch(params);
                }}
              >
                Save result
              </button>
            </Link>
          </div>
          <button className="retry" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      ) : null}
    </>
  );
};

export default GameWindow;
