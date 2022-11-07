import React from 'react';
//import PropTypes from 'prop-types';

export const Card = ({...props}) => {
  const {
    id,
    value,
    matched,
    revealed,
    handleCardClick
  } = props


  if (revealed || matched) {
    return(
      <div className="card face">Card {value}</div>
    )
  } else {
    return(
      <div onClick={() => handleCardClick(id)} className="card back"></div>
    )
  }

}
//Card.propTypes = {};