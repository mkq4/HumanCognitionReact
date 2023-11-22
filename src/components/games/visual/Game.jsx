import React, { useState, useEffect } from "react";

const Game = () => {
  const [area, getArea] = useState();
  const [level, setLevel] = useState(1);
  const [missCounter, setMissCounter] = useState(0);
  const [areaBlocks, setAreaBloks] = useState(3);
  const [blocksArr, setBlocksArr] = useState([])
  const [blocksCounter, setBlocksCounter] = useState(3);
  const generateArea = (blocksCounter) => {
    let arr = []
    for(let i = 0; i > 3; i++) {
    return (
      <>
        
      </>
    )
  };
  // setBlocksArr(generateArea(blocksCounter))
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${areaBlocks}, 1fr)`,
        gridTemplateRows: `repeat(${areaBlocks}, 1fr)`,
      }}
      className="grid"
    >
      {generateArea()}
    </div>
  );
};

export default Game;
