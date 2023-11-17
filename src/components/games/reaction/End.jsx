import React from "react";
import { Link } from "react-router-dom";
import axiosPatch from "../../axios";
const End = ({ time }) => {
  const params = {
    id: "1",
    name: "Reaction Speed",
    bestResult: time
  };
  return (
    <div className="end-menu">
      <div className="end-text">Your result <br /> <b>{time}</b> ms </div>
      <div className="end-menu-buttons d-flex align-center justify-center">
        <Link className="home-link cu-p" to="/">
          Home
        </Link>
        <Link to="/profile">
          <button
            className="save-result cu-p"
            onClick={() => {
              const params = {
                id: "1",
                name: "Reaction Speed",
                bestResult: time
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
