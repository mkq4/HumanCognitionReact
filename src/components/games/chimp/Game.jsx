import React from "react";
import "./Index.scss"; // import the CSS file
import { Link } from "react-router-dom";
import axiosPatch from "../../axios";
const Game = () => {
  const [gameState, setGameState] = React.useState("numbers"); // numbers, blocks, win-menu, lose-menu
  const [cells, setCells] = React.useState([]);
  const [counter, setCounter] = React.useState(1);
  const [misses, setMisses] = React.useState(3);
  const [canClick, setCanClick] = React.useState(false); // add new state variable
  const [blocksArr, setBlocksArr] = React.useState([]);
  const [level, setLevel] = React.useState(1);
  const [blocksCounter, setBlocksCounter] = React.useState(5);
  React.useEffect(() => {
    if (gameState === "numbers") {
      const newCells = [];
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 8; j++) {
          const id = `${i}-${j}`;
          newCells.push(
            <div
              key={id}
              id={id}
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
              }}
              className={"block"}
              onClick={(event) => {
                if (canClick && event.target.innerHTML === counter.toString()) {
                  // add canClick check
                  event.target.style.display = "none";
                  setCounter(counter + 1);
                }
              }}
            ></div>
          );
        }
      }
      setCells(newCells);
    }
    const blocksArr = document.querySelectorAll(".active");
    setTimeout(() => {
      setBlocksArr(blocksArr);
      console.log(blocksArr);
    }, 0);
  }, [gameState, counter, canClick]); // add canClick to dependencies

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const blocks = document.querySelectorAll(".block");
      blocks.forEach((block) => {
        if (block.textContent !== "") {
          block.classList.add("active");
          block.style.backgroundColor = "#770859";
          block.style.color = "#770859";
          block.style.cursor = "pointer";
        }
      });
      setCanClick(true); // enable clicking after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [gameState]);

  const createBlocks = (numBlocks) => {
    const blockIds = new Set();
    while (blockIds.size < numBlocks) {
      const randomId = `${Math.floor(Math.random() * 5)}-${Math.floor(
        Math.random() * 8
      )}`;
      blockIds.add(randomId);
    }
    const blockArray = Array.from(blockIds).map((id, index) => ({
      id,
      number: index + 1,
    }));
    return blockArray;
  };

  const blocks = React.useMemo(
    () => createBlocks(blocksCounter),
    [blocksCounter]
  );

  return (
    <>
      {gameState === "numbers" ? (
        <div className="field">
          {cells.map((cell) => {
            const block = blocks.find((b) => b.id === cell.key);
            return (
              <div
                key={cell.key}
                id={cell.key}
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className={"block"}
                onClick={(event) => {
                  if (
                    canClick &&
                    event.target.innerHTML === counter.toString()
                  ) {
                    event.target.style.backgroundColor = "#77a980";
                    event.target.style.color = "#77a980";
                    setCounter(counter + 1);
                    if (counter === blocksArr.length) {
                      setGameState("win-menu");
                    }
                    if (misses === 1) {
                      setGameState("lose-menu");
                    }
                  } else if (
                    canClick &&
                    event.target.innerHTML != counter.toString()
                  ) {
                    setMisses(misses - 1);
                  }
                  if (misses === 1) {
                    setGameState("lose-menu");
                  }
                }}
              >
                {block ? block.number : null}
              </div>
            );
          })}
          <div className="counter-misses">Misses: {misses}</div>
        </div>
      ) : null}
      {gameState === "win-menu" ? (
        <div className="win-menu">
          <p className="">Great!</p>
          <p className="mt-30">Level {level}</p>
          <button
            className="win-button button mt-50"
            onClick={() => {
              setCounter(1);
              setBlocksCounter(blocksCounter + 1); // add 1 to blocksCounter
              setLevel(level + 1);
              setGameState("numbers");
            }}
          >
            Next level
          </button>
        </div>
      ) : null}
      {gameState === "lose-menu" ? (
        <div className="lose-menu">
          <p>You loose</p>
          <p className="mb-50">Level {level}</p>
          <div className="end-menu-buttons d-flex align-center justify-center">
            <Link className="home-link cu-p" to="/">
              Home
            </Link>
            <Link to="/profile">
              <button
                className="save-result cu-p"
                onClick={() => {
                  const params = {
                    id: "3",
                    name: "Chimp Test",
                    bestResult: level + ' level',
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

export default Game;
