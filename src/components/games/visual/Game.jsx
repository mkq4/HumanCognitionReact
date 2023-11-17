import React, { useState, useEffect } from "react";

const Game = () => {
  const [cells, setCells] = useState([]);
  const [numCells, setNumCells] = useState(3);
  const [numSelected, setNumSelected] = useState(3);

  // Generate cells with unique classNames
  const generateCells = () => {
    const newCells = [];
    for (let i = 0; i < numCells; i++) {
      for (let j = 0; j < numCells; j++) {
        const id = `${i}-${j}`;
        newCells.push(
          <div key={id} className={`cell ${id}`}>
            {id}
          </div>
        );
      }
    }
    setCells(newCells);
  };

  // Select random cells
  const selectRandomCells = () => {
    const cellClassNames = cells.map((cell) => cell.props.className);
    const selectedClassNames = [];
    while (selectedClassNames.length < numSelected) {
      const randomIndex = Math.floor(Math.random() * cellClassNames.length);
      const randomClassName = cellClassNames[randomIndex];
      if (!selectedClassNames.includes(randomClassName)) {
        selectedClassNames.push(randomClassName);
      }
    }
    selectedClassNames.forEach((className) => {
      const selectedCell = document.querySelector(`.${className}`);
      selectedCell.classList.add("selected");
    });
  };

  // Generate cells and select random cells on mount
  useEffect(() => {
    generateCells();
    selectRandomCells();
  }, []);

  return <div className="grid">{cells}</div>;
};

export default Game;