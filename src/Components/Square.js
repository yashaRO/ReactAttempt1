import React, { Component } from 'react';

function Square(props) {
    return (
      <button className="Square" style={props.style} onClick={props.onClick}>
         {props.value}
      </button>
    );
}

export default Square;
