import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = (props) => (
  <div className="row" id={this.props.i}>
    {
      this.props.row.map((cell, i) => 
        <Cell cell={cell} handleClick={this.props.handleClick} key={i} rowId={this.props.i} i={i} />
      )
    }
  </div>  
)

Row.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Row;