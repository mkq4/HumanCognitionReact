import React, { useState, useEffect } from "react";
import Area3 from "./Area3";
import Area4 from "./Area4";
const Game = () => {
  // const [area, getArea] = useState();
  const [level, setLevel] = useState(1);
  const [area, setArea] = useState(3)

  return (
    <>
      {area === 3 ? <Area3/> : null}
    </>
  );
};

export default Game;
