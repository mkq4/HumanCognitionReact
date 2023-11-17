import React from 'react'
import { Link } from 'react-router-dom';
import axiosPatch from './axios';
const Buttons = ({params}) => {
    console.log(params);
  return (
    <>
        <div className="end-menu-buttons d-flex align-center justify-center">
        <Link className="home-link cu-p" to="/">
        Home
        </Link>
        <Link to="/profile">
        <button
            className="save-result cu-p"
            onClick={() => {
            const params = {
                id: params.id,
                name: params.name,
                bestResult: params.bestResult
            };
            axiosPatch(params);
            }}
        >
            Save result
        </button>
        </Link>
    </div>
    <button className="retry" onClick={() => window.location.reload()}>Retry</button>
  </>
  )
}

export default Buttons