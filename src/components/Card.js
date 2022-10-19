import React from 'react';
//import PropTypes from 'prop-types';

export const Card = ({...props}) => {
  const {
    index,
    value,
    revealed,
    handleCardClick
  } = props



  if (revealed) {
    return(
      <div className="card face">Card {value}</div>
    )
  } else {
    return(
      <div onClick={() => handleCardClick(index,value)} className="card back"></div>
    )
  }

}
//Card.propTypes = {};