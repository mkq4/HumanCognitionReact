import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Index.scss";
import axiosPatch from "../../axios";
import Buttons from "../../Buttons"
const End = ({ setWindowState, time }) => {
  const [endTime, setEndTime] = useState();
  const [middleTime, setMiddleTime] = useState();
  useEffect(() => {
    const endTimer = new Date();
    setEndTime(endTimer);
    setMiddleTime(Math.floor(endTimer - time));
  }, []);
  const middleMs = middleTime / 25;
  const middleSec = (middleTime / 1000 / 25).toFixed(3);
  return (
    <div className="end-menu d-flex flex-column align-center justify-center h100p">
      <h1>Congratulations!</h1>
      <p className="mb-20 mt-20">
        Your result: <b>{middleMs}</b> ms <br />
        or <br /> <b>{middleSec}</b> sec per target
      </p>
      
      <div className="end-menu-buttons d-flex align-center justify-center">
        <Link className="home-link cu-p" to="/">
          Home
        </Link>
        <Link to="/profile">
          <button
            className="save-result cu-p"
            onClick={() => {
              const params = {
                id: "2",
                name: "Aim Trainer",
                bestResult: middleSec + ' sec'
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
  );
};

export default End;
// const params = {
//   id: "2",
//   name: "Aim Trainer",
//   bestResult: middleSec
// };