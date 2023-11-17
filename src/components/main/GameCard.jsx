import PropTypes from 'prop-types';
import './GameCard.scss'
import { Link } from 'react-router-dom';
const GameCard = (props) => {
    return(
        <div className={`games__card ${props.type} ${props.size}`}>
            <Link to={props.path} className="games-card-link">
                <img src={props.imgSrc} alt={props.imgAlt} className={`card-img ${props.type}-img`} />
                <h3 className={`card-title ${props.type}-title`}>{props.title}</h3>
                <h4 className={`card-subtitle ${props.type}-subtitle`}>{props.subtitle}</h4>
            </Link>
        </div>
    )
}
GameCard.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
export default GameCard;