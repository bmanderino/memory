import React from 'react';
//import PropTypes from 'prop-types';

export const Card = ({...props}) => {
  const {
    value,
    revealed
  } = props

  const handleSelectedCard = () => {

  }

  return(
    <div onClick={handleSelectedCard} className="card">Card {value}</div>
  )
}
//Card.propTypes = {};