import React from 'react'
import { Link } from 'react-router-dom'
import axiosPatch from '../../axios'
const End = ( {start, end, length} ) => {
  console.log(start, end);
  const secondsBetween = (((end - start) / 1000) / length).toFixed(10)
  return (
    <div className='end-menu'>
        <div className="time mb-50">Symbols per second <br /> <span>{secondsBetween}</span></div>
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
                    bestResult: secondsBetween,
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
  )
}

export default End