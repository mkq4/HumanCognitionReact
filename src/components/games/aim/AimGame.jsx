import "./Index.scss";

// export default Game;
import React, { useEffect, useState } from "react";
import End from "./End";

const Game = ({ setWindowState }) => {
  const [target, setTarget] = useState(true);
  const [count, setCount] = useState(25);
  const [time, setTime] = useState()

  const generateCoordinates = () => {
    let x = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() * 100) + 1;
    while (x < 18) {
      x = Math.floor(Math.random() * 100) + 1;
      y = Math.floor(Math.random() * 100) + 1;
    }
    return { x, y };
  };
  

  const onClick = () => {
    setTarget(false); // Устанавливаем target в значение false для удаления объекта со страницы
    setTimeout(() => {
      setTarget(true); // Через задержку возвращаем target в значение true для появления объекта с новыми координатами
      setCount(count - 1);
    }, 0);
  };
  
  useEffect(() => {
    const timer = new Date()
    setTime(timer)
  }, []);
  
  return (
    target === true &&
    (count ? (
      <>
        <div
          onClick={onClick}
          className="target cu-p"
          style={{
            top: generateCoordinates().x + "%",
            left: generateCoordinates().y + "%",
          }}
        >
          <img
            src="../../../../public/images/svg/aim.svg"
            alt="error"
            className="target-image"
          />
        </div>
        <div className="counter">{count}</div>
      </>
    ) : (
      <End setWindowState={setWindowState} time={time}/>
    ))
  );
};
export default Game;
