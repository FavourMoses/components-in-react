import PropTypes from 'prop-types';
import './card.css'
const Card = ({icon, title, color, textColor, headColor,}) => {
    return (
      <div className="apt" style={{ background: color }}>
        {/* <{icon} className="world-icon" /> */}
        <div className="world-icon" style={{color: headColor}}>{icon}</div>

        <p className="box-heading" style={{ color: headColor }}>
          {title}
        </p>
        <p className="box-para" style={{ color: textColor }}>
          Study at the designated and complete the specifies course of study.
          <br />
          You are allowed to work part-time during the academic session and
          full-time during <br />
          scheduled breaks.
        </p>
      </div>
    );
}
Card.propTypes={
icon: PropTypes.node,
title: PropTypes.string,
color: PropTypes.string,
textColor: PropTypes.string,
headColor: PropTypes.string,
}
 
export default Card;