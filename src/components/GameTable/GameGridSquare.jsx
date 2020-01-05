import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function GameGridSquare({ index, square }) {
  const {
    //
    id,
    empty,
    active,
  } = square;
  const dispatch = useDispatch();

  const handleClickGrid = () => {
    dispatch({ type: 'CLICK_GRID', payload: { index } });
  };

  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      onClick={handleClickGrid}
      onKeyPress={handleClickGrid}
      role="gridcell"
    >
      {!empty && active && <div className="bread" />}
    </span>
  );
}

GameGridSquare.propTypes = {
  index: PropTypes.number.isRequired,
  square: PropTypes.number.isRequired,
};
