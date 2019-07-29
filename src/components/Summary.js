import React from 'react';

import './Summary.css';

const Summary = props => {
  return (
    <div className="summary">
      <h1>{props.name}</h1>
      
      <p>
        Height: <span className="summary__output">{props.height}</span>
      </p>
      
      
    </div>
  );
};

export default Summary;