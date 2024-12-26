import React from 'react';

const Xmark = () => {
  return (
    <svg 
      width="30px" 
      height="30px" 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`.cls-2 {
            fill: white;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          }`}
        </style>
      </defs>
      <g id="cross">
        <line className="cls-2" x1="7" x2="25" y1="7" y2="25" />
        <line className="cls-2" x1="7" x2="25" y1="25" y2="7" />
      </g>
    </svg>
  );
};

export default Xmark;
