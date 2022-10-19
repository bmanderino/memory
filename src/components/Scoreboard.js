import React from 'react';
//import PropTypes from 'prop-types';
export const Scoreboard = ({...props}) => {
  const {score} = props
  //score
  return (
    <div>{score}</div>
  )
}
//Scoreboard.propTypes = {};