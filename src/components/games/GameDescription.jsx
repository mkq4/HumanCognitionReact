/* eslint-disable react/prop-types */
import './Index.scss';

const GameDescription = ( {title, text} ) => {
  return (
    <div className="about d-flex mb-40">
        <div className="container">
            <div className="about__inner d-flex flex-column justify-center align-center">
                <h3> {title} </h3>
                <p> {text} </p>
            </div>
        </div>
    </div>
  )
}

export default GameDescription